import React from 'react'
import {language} from '../components/languages'
import {educationLangugage} from '../components/EducationLanguage'


const edducation = ({languageState, setLanguageState}) => {
const ed=educationLangugage.languageState
console.log(ed)
  return (
    <div >
    <div className='container pt-5 about-text'>
    <div className='pb-5'>
<h1 className='text-color'>{languageState === "swedish" ? language.swedish.utbRubrik : languageState === "english" ? language.english.utbRubrik : null }</h1>
</div>
<div className="container">
  <div className="row">
   { languageState === "swedish" ? 
   educationLangugage.swedish.map(e=>{
    return <div key={e.id} className="mb-5 col-md-6">
        <h5 className='text-color edu-text'>{e.utb}</h5>
        
        <h6 className='text-color' style={{fontWeight:"400"}}>{e.år} {e.uni}</h6>
        <hr className='text-color'></hr>
        </div>
   })
   
       : languageState === "english" ? 
       educationLangugage.english.map(e=>{
        return <div key={e.id} className="mb-5 col-12 col-md-6">
            <h5 className='text-color edu-text'>{e.utb}</h5>
            
            <h6 className='text-color'>{e.år} {e.uni}</h6>
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

export default edducation