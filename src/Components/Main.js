// import React, { useRef } from 'react'
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
                        <i className='bx bxl-github'></i>
                        <i className='bx bxl-codepen'></i>
                        <i className='bx bxl-linkedin-square'></i>
                    </div>
                </div>
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/18-hatake-kakashi-nguyen-hai.jpg" alt="" />
            </div>
            <div className="tags" data-aos="fade-left">
                <i className='bx bxl-gmail' ></i>
                <i className='bx bxl-telegram' ></i>
            </div>
            <section>               
                  <h1>About me</h1>
                <div className="about-me">
                    <div className="con"  data-aos="fade">
                        <img data-aos="zoom-in" src="https://sm.mashable.com/mashable_in/photo/default/snapinstaapp-365473084-1339804900221764-9002098302298960009_v1rd.jpg" alt="" />
                        <div className="details"data-aos="fade" >
                            <h1>I am Rohith Venkata Sai</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi debitis provident neque sed! Pariatur, iure sapiente ratione deserunt dignissimos cum omnis sed iste ea recusandae magni error quia laudantium repellendus commodi, fuga quis excepturi fugit impedit ipsum vero, sit esse? Consequuntur itaque dignissimos illo rem minus amet accusamus tempore quidem.</p>
                            <div className="ins"  data-aos="fade" data-aos-delay="150">
                                <p><strong>name : </strong> K.Rohith Venkata Sai</p>
                                <p><strong>Email : </strong>2100032432csh@gmail.com</p>
                                <p><strong>Phone Number : </strong>8341141759</p>
                                <p><strong>Status : </strong>Student</p>
                                <p><strong>country : </strong>India</p>
                                <p><strong>Age : </strong>20</p>
                            <button>Resume <i class='bx bxs-chevrons-down bx-rotate-270' ></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Main