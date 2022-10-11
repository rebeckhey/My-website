import React from 'react'
import {
    Link
  } from "react-router-dom";
  import { AiOutlineMail } from 'react-icons/ai';
  import { MdOutlineCall } from 'react-icons/md';
  import { GoLocation} from 'react-icons/go';
  import {language} from './languages'
  import Toggle from './toggle'





const nav = ({languageState, setLanguageState}) => {
 console.log(languageState)
  return (
    <header>

    {/* <nav className="navbar fixed-top nav-color navbar-expand-lg navbar-light  ">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="text-color fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
            <li className="nav-item active ">
         
             <Link className="nav-link" aria-current="page" to="/">Home</Link>
            
            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">About me</Link>            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">skills</Link>            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">portfolio</Link>            </li>
          </ul>
        </div>
    <Toggle languageState={languageState} setLanguageState={setLanguageState}/>
      </div>
    </nav> */}

    <div
      className="p-5 text-center bg-image"
    
      
    >
      <div className="mask" >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="d-flex justify-content-md-between flex-md-row flex-column mt-5 ">
            <div className=' mr-md-5'>
            <h1 className="mb-md-1 mb-3 text-center text-md-left text-color">Rebecka Pettersson</h1>
            <h4 className="text-center text-md-left mb-md-1 mb-3 text-color">{languageState === "swedish" ? language.swedish.roll : languageState === "english" ? language.english.roll : null }</h4>
            <p className='mb-md-1 mb-3  text-center text-md-left text-color'> <AiOutlineMail/> Rebecka.pettersson.1993@gmail.com</p>
            <p className='mb-md-1 mb-3 text-center text-md-left text-color'> <MdOutlineCall/>{languageState === "swedish" ? language.swedish.telefonnummer : languageState === "english" ? language.english.telefonnummer : null }</p>
            <p className='mb-md-1 mb-3  text-center text-md-left text-color'> <GoLocation/>  {languageState === "swedish" ? language.swedish.plats : languageState === "english" ? language.english.plats : null }</p>
            </div>
            <div className="mr-md-5 mt-4 mt-md-0 d-flex align-items-center justify-content-center">
             <img className="image" src={require('../images/image.jpg')}  alt="me"/>
             </div>
          </div>
        </div>
      </div>
    </div>

  </header>
  )
}

export default nav