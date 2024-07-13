import React from 'react'
import './About.css';
// import Bounce from 'react-reveal';
import img3 from "../../assets/images/WhatsApp Image 2023-12-16 at 12.50.08_a7fd8acf.jpg"
const About = () => {
  return (
    <>
    {/* <Bounce> */}

   
    <div className="about" id="about">
    <div className="row">
   <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
<img src={img3} alt="profile_pic"/>
   </div>
   <div className="col-md-6 about-content">
<h1>About me</h1>
<p>
I am a tech enthusiast , pursuing Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE) from National Institute of Technology Patna. I have been a student developer and team player working with several teams and communities. I have explored domains like Fronted & Backend development using HTML,React Js,Node js,Java Script . I am very enthusiastic about working in team having members from diverse domains to implement an efficient and optimised software solution by considering opnion of each member .


   
</p>
</div> 
    </div>
      
    </div>
    {/* </Bounce> */}
    </>
  )
}

export default About
