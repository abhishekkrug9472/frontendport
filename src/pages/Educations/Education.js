import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';
import { MdSchool } from "react-icons/md";
const Education = () => {
  return (
    <>
<div className="conatiner education" id="education">
<h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />

<div >
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020"
    iconStyle={{ background: '#138781', color: 'black' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">CLASS 10th</h3>
    <h4 className="vertical-timeline-element-subtitle">Nikhil Shyama D A V Public School Dumra,Sitamarhi </h4>
    
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2021"
    iconStyle={{ background: '#138781', color: 'black' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">CLASS 12th</h3>
    <h4 className="vertical-timeline-element-subtitle">Hellens Public School Dumra,Sitamarhi </h4>
    
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021-2025"
    iconStyle={{ background: '#138781', color: 'black' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech </h3>
    <h4 className="vertical-timeline-element-subtitle">National Institute of Technology ,Patna </h4>
    
  </VerticalTimelineElement>
    </VerticalTimeline>
</div>
</div>
    </>

   )
}

export default Education
