import React from 'react'
import {language} from '../components/languages'

const om = ({languageState, setLanguageState}) => {
  return (
    <div className='om'>
        <div className='container pt-5 about-text'>
<div>
<h1 className='text-color mb-3'>{languageState === "swedish" ? language.swedish.omRubrik : languageState === "english" ? language.english.omRubrik : null }</h1>
</div>
<div className='d-flex justify-content-center row'>
<div className='col-md-6'>
<div className='d-flex flex-column justify-content-center'>
<p className='text-color'>{languageState === "swedish" ? language.swedish.om1 : languageState === "english" ? language.english.om1 : null }</p>
<p className='text-color'>{languageState === "swedish" ? language.swedish.om2 : languageState === "english" ? language.english.om2 : null }</p>
</div>
        <div>
        <img  className="illustration" src={'https://cdn.pixabay.com/photo/2022/05/20/22/57/man-7210357_960_720.png'}  alt="picture of me"/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default om