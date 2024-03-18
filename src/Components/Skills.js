import React from 'react'
import Card from './Card'
import { certifications } from './data'
import './Styles/cards.css'
function Skills() {
  return (
    <>
    <h1>cards</h1>
    <div className="container">
    {certifications.map((ele,id)=>(
      <Card name={ele.name} id={id} />

    ))}</div>
    </>
  )
}

export default Skills