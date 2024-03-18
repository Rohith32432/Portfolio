import React from 'react'
import data from './data'
import './Styles/Skill.css'
import Marquee from 'react-fast-marquee';
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import Timeline from './Timeline';
import Card from './Card';

function Projects() {


  return (
    <>
      {
        // data.certifications.map((ele)=>([
        //     <h2>{ele.name}</h2>,
        //     <h2>{ele.img}</h2>,
        //     <h2>{ele.link}</h2>
        // ]))

      }
      <div className='main-box'>

           <Marquee  pauseOnHover={true} style={{width:'90%'}}  direction='right'>
          <div style={{ color: 'orangered', display: 'flex', alignItems: 'center', gap: 40 }}>
            <FaJava size={80} />
            <IoLogoJavascript size={80} />
            <FaNode size={80} />
            <FaReact size={80} />
            <SiMongodb size={80} />
          </div>
        </Marquee>
      <div className="skills">
        <div className="sub-1">  
            <h1>Cerfication</h1>
          <div className="container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>

        <div className="stats">
          <div className="content">
            <Timeline />
          </div>
        </div>


      </div>
      </div>
    </>
  )
}

export default Projects