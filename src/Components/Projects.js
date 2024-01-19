import React from 'react'
import data from './data'
function Projects() {


  return (
    <>
    {
        data.certifications.map((ele)=>([
            <h2>{ele.name}</h2>,
            <h2>{ele.img}</h2>,
            <h2>{ele.link}</h2>
        ]))
    }
    </>
  )
}

export default Projects