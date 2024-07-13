import React from 'react';
import "./Menu.css";
import { Link} from 'react-scroll';
// import Zoom from 'react-reveal';
// import Fade from 'react-reveal';
import img1 from "../../assets/images/WhatsApp Image 2023-12-16 at 12.50.08_a7fd8acf.jpg"
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation} from 'react-icons/fc'
const Menu = ({toggle}) => {
  return (
    <>
    {/* <Zoom> */}
    {toggle&& (
    <div className="navbar-profile-pic">
    <img src={img1}/>
     </div>
 
   
    )
    }
    {/* </Zoom> */}
    {/* <Fade> */}
 <div className="nav-items">
    <div className="nav-item">
        <div className="nav-link">
        <Link to="Home" spy={true} smooth={true} duration={100} offset={-100}>
        <FcHome/>
            Home
        </Link>
      
        </div>
    </div>
    <div className="nav-item">
        <div className="nav-link">
        <Link to="about"spy={true} smooth={true} duration={100} offset={-100}>
        <FcAbout  />
            About
        </Link>
      
        </div>
    </div>
    <div className="nav-item">
        <div className="nav-link">
        <Link to="education" spy={true} smooth={true} duration={100} offset={-100}>
        <FcReadingEbook />
            Education
        </Link>
       
           
        </div>
    </div>
    <div className="nav-item">
        <div className="nav-link">
        <Link to="project"spy={true} smooth={true} duration={100} offset={-100}>
        <FcVideoProjector/>
            Projects
        </Link>
       
        </div>
    </div>
    <div className="nav-item">
        <div className="nav-link">
        <Link to="workex" spy={true} smooth={true} duration={100} offset={-100}>
        <FcPortraitMode/>
            Work Experience  
        </Link>
       
        </div>
    </div>
    <div className="nav-item">
        <div className="nav-link">
        <Link to="techstack"spy={true} smooth={true} duration={100} offset={-100} >
        <FcBiotech />
            Tech Stack 
        </Link>
       
        </div>
    </div>
   
   
    <div className="nav-item">
        <div className="nav-link">
        <FcBusinessContact/>
            Contacts
        </div>
    </div>
    
    
 </div>
    
  {/* </Fade> */}
    </>
  )
}

export default Menu
