import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import './Styles/cards.css'
const Card = ({name ,id}) => {
  return (
    <>
   
     <div class="layout" data-aos="fade-up" data-aos-delay={id*300}>
            <div class="main">
                <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" alt="Card Image"/>
                <div class="content">
                    <p>Lorem ipsum dolor sit   amet consectetur adipisicing elit. Voluptatum nobis eligendi eum quod minus distinctio commodi doloremque odit incidunt, obcaecati ea sed repudiandae placeat quas neque perferendis enim officia numquam.
                    </p>
                    <li>node</li>
                    <li>react</li>
                    <li>mongodb</li>
                    <li>bootstrspds</li>
                </div>
                <div class="vcontent">
                    <h2>name</h2>
                    <div class="links">
                        <a href="#"> <FiExternalLink size={30}/></a>
                        <a href="#"><i class="fa-brands fa-github"><FaGithub size={30}/></i></a>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  );
};

export default Card;
