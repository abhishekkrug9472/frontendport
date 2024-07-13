import React from 'react'
import './WorkExp.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdSchool } from "react-icons/md";
const WorkExp = () => {
  return (
    <>
    <div className=' work' id="workex">
    <div className=' container work-exp'>

  
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
         WORK EXPERIENCE
        </h2>
        <hr />   
        <div >
        <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="JULY 2021 TO JAN 2022 "
    iconStyle={{ background: '#138781', color: 'black' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">CODNING NINJAS </h3>
    <h4 className="vertical-timeline-element-subtitle">Teaching Assistance (For Data Structure and Algorithms) </h4>
    
  </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </div>
    </div>
    </>
  )
}

export default WorkExp
