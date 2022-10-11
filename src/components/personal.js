import React from 'react'
import { language } from './languages'

const personal = ({languageState, setLanguageState}) => {
  return (
    <div className='personal'>
        <div className='container pt-5 about-text'>
<div >
<h1 className='text-color mb-3'>{languageState === "swedish" ? language.swedish.personligRubrik : languageState === "english" ? language.english.personligRubrik : null }</h1>
</div>
            <div className='d-flex justify-content-center row'>
<div className='col-md-6'>
<div className='d-flex flex-column justify-content-center'>
<p className='text-color'>{languageState === "swedish" ? language.swedish.personligaEgenskaper : languageState === "english" ? language.english.personligaEgenskaper : null }</p>
</div>
        <div>
        <img  className="illustration" src={'https://cdn.pixabay.com/photo/2018/08/15/09/52/programmer-3607627_960_720.png'}  alt="illustration"/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default personal