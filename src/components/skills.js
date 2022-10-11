import React from 'react'
import { skillLangugage } from './skillLanguage'
import { language } from './languages'

const skills = ({languageState, setLanguageState}) => {
  return (
    <div >
    <div className='container pt-5 about-text'>
    <div className='pb-5'>
<h1 className='text-color'>{languageState === "swedish" ? language.swedish.skillRubrik : languageState === "english" ? language.english.skillRubrik : null }</h1>
</div>
<div className="container">
  <div className="row">
   { languageState === "swedish" ? 
   skillLangugage.swedish.map(e=>{
    return <div key={e.id} className="mb-5 col-md-6">
        <h5 className='text-color edu-text'>{e.line1}</h5>
        
        <h6 className='text-color'>{e.line2}</h6>
        <hr className='text-color'></hr>
        </div>
   })
   
       : languageState === "english" ? 
       skillLangugage.english.map(e=>{
        return <div key={e.id} className="mb-5 col-12 col-md-6">
            <h5 className='text-color edu-text'>{e.line1}</h5>
            
            <h6 className='text-color'>{e.line2}</h6>
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

export default skills