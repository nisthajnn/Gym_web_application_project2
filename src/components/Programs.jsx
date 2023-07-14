import React from 'react'
import './Programs.css'
import {programsData} from '../data/programsData';
import RightArrow from '../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className='Programs' id='Programs'>
        {/* header */}
        <div className='programs-header'>
            <span className='stroke-text'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke-text'>TO SHAPE YOU</span>
       
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                     <div className='category'>
                       {program.image}
                       <span>{program.heading}</span>
                       <span>{program.details}</span>
                       <div className='join-now'><span>Join now</span><img src={RightArrow}></img></div>
                        </div>
            ))}
        </div>
    </div>
  )
}

export default Programs