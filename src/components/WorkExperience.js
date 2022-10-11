import React from 'react'
import { language } from './languages'
import { workExperienceLangugage } from './workExperienceLanguage'

const WorkExperience = ({languageState, setLanguageState}) => {
  return (
    <div className='work-exp' >
    <div className='container pt-5 about-text'>
    <div className='pb-5'>
<h1 className='text-color'>{languageState === "swedish" ? language.swedish.workRubrik : languageState === "english" ? language.english.workRubrik : null }</h1>
</div>
<div className="container">
  <div className="row">
   { languageState === "swedish" ? 
   workExperienceLangugage.swedish.map(e=>{
    return <div key={e.id} className="mb-5 col-md-6">
        <h5 className='text-color edu-text'>{e.work}</h5>
        
        <h6 className='text-color' style={{fontWeight:"400"}}>{e.desc}</h6>
        <hr className='text-color'></hr>
        </div>
   })
   
       : languageState === "english" ? 
       workExperienceLangugage.english.map(e=>{
        return <div key={e.id} className="mb-5 col-12 col-md-6">
            <h5 className='text-color edu-text'>{e.work}</h5>
            
            <h6 className='text-color'>{e.desc}</h6>
            <hr className='text-color'></hr>
            </div>
       })
       :null
    
    
   }
    
  </div>
</div>
    </div>
    </div>
  )
}

export default WorkExperience