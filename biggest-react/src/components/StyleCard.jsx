import React from "react";

function StyleCard() {
  return (
    <div
      style={{
        backgroundColor: 'maroon',
        color: 'white',
        padding: "30px",
        borderRadius: '10px',
        marginLeft: '2rem',
        marginRight: '2rem',
        marginBottom: '2rem'

        // backgroundColor: "lightblue",
        // padding: "20px",
        // borderRadius: "10px",
        // color: "darkblue",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", backgroundColor: 'maroon' }}>Hello World</h2>
      <p style={{fontSize: "1rem", backgroundColor: 'maroon'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aspernatur esse blanditiis consectetur eius neque iusto provident cum ullam dolores id, magnam doloremque fugiat nisi natus officia magni maxime dolor!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore dolorum, cum, aliquam numquam amet nisi ut minima aliquid quo, voluptas explicabo nulla et. Quasi voluptates doloribus fugit sed aut?
      </p>
    </div>
  );
}

export default StyleCard;
