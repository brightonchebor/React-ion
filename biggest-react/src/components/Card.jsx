import React from 'react'

function Card() {

    const cardStyle = {
        
        backgroundColor: 'rgb(206, 206, 223)',
        padding: '10px',
        borderRadius: '25px',
        margin: '10px',
        border: '2px solid #888',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        minWidth: '200px',
        textAlign: 'center',


    };

    const h1Style = {
        

    };

    const pStyle = {

    };

  return (
    <div style={cardStyle}>
      <h1 style={h1Style}>My Card</h1>
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in debitis
        nobis repellendus veritatis tempora voluptas perspiciatis cum natus,
        aliquam hic asperiores molestias, saepe, enim inventore eligendi. Quia,
        repellat dicta.
      </p>
    </div>
  );
}

export default Card
