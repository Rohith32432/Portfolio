import React from 'react'
import Card from './Card'
import { certifications } from './data'
import './Styles/cards.css'
function Skills() {
  return (
    <>
    <h1>cards</h1>
    <div className="testing">
    {certifications.map((ele)=>(
      <Card name={ele.name}/>

    ))}</div>
    </>
  )
}

export default Skills