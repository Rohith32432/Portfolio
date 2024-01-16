import React, { useRef } from 'react'
import './Styles/Main.css'
function Main() {

    return (
        <>
            <div className="hero">
                <div className="content">
                    <h3>hello there </h3>
                    <h1> i am Rohith_K</h1>
                    <h2>And i am Frontend devloper</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolore enim qui laudantium, tempore culpa voluptates ea dignissimos inventore cumque architecto dolores obcaecati assumenda quo autem atqu?</p>
                    <div className="socialmedia">
                        <i class='bx bxl-github'></i>
                        <i class='bx bxl-codepen'></i>
                        <i class='bx bxl-linkedin-square'></i>
                    </div>
                </div>
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/18-hatake-kakashi-nguyen-hai.jpg" alt="" />
            </div>
            <div  className="tags" data-aos="fade-left">
                <i class='bx bxl-gmail' ></i>
                <i class='bx bxl-telegram' ></i>
            </div>

        </>
    )
}

export default Main