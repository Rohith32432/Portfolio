import React from 'react';
import './Styles/cards.css'
const Card = () => {
  return (
    <>
      <h1>Card</h1>
      <div className="layout">
        <div className="main">
          <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*8gmgaAkFdI-9OHY5cA93xQ.png" alt="Card Image" />
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nobis eligendi eum quod minus distinctio
              commodi doloremque odit incidunt, obcaecati ea sed repudiandae placeat quas neque perferendis enim officia
              numquam.
            </p>
            <li>node</li>
            <li>react</li>
            <li>mongodb</li>
            <li>bootstrspds</li>
          </div>
          <div className="vcontent">
            <h2>name</h2>
            <div className="links">
              <a href="/"><i className="fa-solid fa-up-right-from-square"></i></a>
              <a href="/"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
