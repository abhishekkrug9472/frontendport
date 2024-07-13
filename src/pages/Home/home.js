import React from 'react'
import './home.css';
// import Fade from 'react-reveal';
import { UseTheme } from '../../context/ThemeContext';
import Resume from '../../assets/docs/ABHISHEK_FINAL YEAR _2104043.pdf'
import Typewriter from 'typewriter-effect';
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs';
const home = () => {
  const [theme,setTheme]=UseTheme();
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==="light"?"dark":"light"))
  }
  return (
    <div className="container-fluid home-container id=home">
    <div className="theme-btn" onClick={handleTheme}>
      {theme==='light'? (<BsFillMoonStarsFill size={30}/>):<BsFillSunFill size={30} />}
    </div>
    <div className="container home-content">
       
{/* <Fade right > */}


    
      <h2>Hi 👌 I  am a</h2>
      <h1>
      <Typewriter
  options={{
    strings: ["Full Stack Developer!", "Mern Stack Developer!","React Native Developer!"],
    autoStart: true,
    loop: true, 
  }}
/> 

      </h1>
      {/* </Fade>
      <Fade button> */}
     
    <div className="home-buttons">
    <a className='btn btn-hire'href="https://api.whatsapp.com/send?phone=9472518518" rel="noreferrer"target="_blank">Hire Me</a>
{/* <button className="btn btn-hire">Hire Me</button> */}
<a className="btn btn-cv" href={Resume} download="My_Name.pdf">My Resume</a>
    </div>  
       
    {/* </Fade> */}
      </div>
    </div>
  )
}

export default home
