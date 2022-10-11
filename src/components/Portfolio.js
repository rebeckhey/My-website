import React from 'react'
import { BsGithub } from 'react-icons/bs';

const Portfolio = ({languageState, setLanguageState}) => {
  return (
    <div >
    <div className='container pt-5 about-text'>
    <div className='pb-5'>
<h1 className='text-color'>Portfolio</h1>
</div>
<div className="container">
  <div className="row d-flex justify-content-center">
  <div className="mb-5 col-md-6 ">

    <BsGithub className='git-icon'/>
    <a href="https://github.com/rebeckhey" className="nav-link git-link" aria-current="page">Go to my github</a>   
  </div>
 
  </div>
</div>
    </div>
    </div>
  )
}

export default Portfolio