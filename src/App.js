import './App.css';
import Heading from "./components/heading"
import React, {useState, useRef, useEffect} from 'react';
import Om from './components/om'
import Toggle from './components/toggle';
import { language } from './components/languages';
import Edducation from './components/edducation';
import Personal from './components/personal';
import Skills from './components/skills';
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio';


function App() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)

  const Active1 =useRef(null)
  const Active2 =useRef(null)
  const Active3 =useRef(null)
  const Active4 =useRef(null)
  const Active5 =useRef(null)
  const Active6 =useRef(null)
  const Active7 =useRef(null)
  useEffect(() => {
    ref1.current.scrollIntoView({
      behavior: "smooth",
    })
  },)
  
 

  const [languageState, setLanguageState]=useState('swedish')
  const scroll = (ref, active) =>{
  ref.current.scrollIntoView({
    behavior: "smooth",
  })
  Active1.current.classList.remove("active")
  Active2.current.classList.remove("active")
  Active3.current.classList.remove("active")
  Active4.current.classList.remove("active")
  Active5.current.classList.remove("active")
  Active6.current.classList.remove("active")
  Active7.current.classList.remove("active")
  active.current.classList.add("active")

}
  return (
    <div className="App">
      
   
      <header>
      <nav className="navbar fixed-top nav-color navbar-expand-lg navbar-light  ">
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
            <li className="nav-item active " ref={Active1}>
         
             <a  onClick={()=>scroll(ref1, Active1)} className="nav-link" aria-current="page" href="/">{languageState ==="swedish" ? language.swedish.hem : languageState ==="english" ? language.english.hem : null }</a>
            
            </li>
            <li className="nav-item "ref={Active2} >
            <a  onClick={()=>scroll(ref2, Active2)}href="/" className="nav-link" aria-current="page">{languageState ==="swedish" ? language.swedish.omRubrik : languageState ==="english" ? language.english.omRubrik : null }</a>            </li>
            <li className="nav-item" ref={Active3}>
            <a  onClick={()=>scroll(ref3, Active3)} href="/" className="nav-link" aria-current="page">{languageState ==="swedish" ? language.swedish.utbRubrik : languageState ==="english" ? language.english.utbRubrik : null }</a>            </li>
            <li className="nav-item" ref={Active4}>
            <a  onClick={()=>scroll(ref4, Active4)} href="/" className="nav-link" aria-current="page">{languageState ==="swedish" ? language.swedish.personligRubrik : languageState ==="english" ? language.english.personligRubrik : null }</a>            </li>
            <li className="nav-item"ref={Active5} >
            <a  onClick={()=>scroll(ref5, Active5)} href="/" className="nav-link" aria-current="page">{languageState ==="swedish" ? language.swedish.skillRubrik : languageState ==="english" ? language.english.skillRubrik : null }</a>            </li>
            <li className="nav-item" ref={Active6}>
            <a  onClick={()=>scroll(ref6, Active6)} href="/" className="nav-link" aria-current="page">{languageState ==="swedish" ? language.swedish.workRubrik : languageState ==="english" ? language.english.workRubrik : null }</a>            </li>
            <li className="nav-item" ref={Active7}>
            <a  onClick={()=>scroll(ref7, Active7)} href="/" className="nav-link" aria-current="page">Portfolio</a></li>
          </ul>
        </div>
    <Toggle languageState={languageState} setLanguageState={setLanguageState}/>
      </div>
    </nav>
    <div ref={ref1}>
    <Heading languageState={languageState} setLanguageState={setLanguageState} />
    </div>
      </header>
      <div ref={ref2}>
    <Om languageState={languageState} setLanguageState={setLanguageState}/>
    </div>
    <div ref={ref3}>
    <Edducation  languageState={languageState} setLanguageState={setLanguageState} />
    </div>
    <div ref={ref4}>
    <Personal languageState={languageState} setLanguageState={setLanguageState}/>
    </div>

    <div ref={ref5}>
    <Skills languageState={languageState} setLanguageState={setLanguageState}  />
    </div>
    <div ref={ref6}>
    <WorkExperience languageState={languageState} setLanguageState={setLanguageState} />
    </div>
    <div ref={ref7}>
    <Portfolio languageState={languageState} setLanguageState={setLanguageState} />
    </div>
 
    </div>
  );
}

export default App;
