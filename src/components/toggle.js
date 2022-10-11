import React, { useState } from "react";
import { FcGlobe } from 'react-icons/fc';


const Toggle = ({languageState, setLanguageState}) => {

    const [languageText, setLanguageText]=useState("en")
    const changeLanguage = ()=>{
        if(languageState==="swedish"){
            setLanguageState("english")
            setLanguageText("sv")
        }
        if(languageState==="english"){
            setLanguageState("swedish")
            setLanguageText("en")
        }
    }
   
  return (
    <div className="d-flex language-btn" onClick={changeLanguage} >
        <div className='mr-2'><FcGlobe/></div>
<div>{languageText}</div>

</div>
       

  )
}

export default Toggle