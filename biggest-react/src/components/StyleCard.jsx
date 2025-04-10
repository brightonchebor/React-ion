import React from "react";

function StyleCard() {
  return (
    <div
      style={{
        backgroundColor: 'maroon',
        color: 'white',
        padding: "25px",
        borderRadius: '20px',

        // backgroundColor: "lightblue",
        // padding: "20px",
        // borderRadius: "10px",
        // color: "darkblue",
      }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Hello World</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aspernatur esse blanditiis consectetur eius neque iusto provident cum ullam dolores id, magnam doloremque fugiat nisi natus officia magni maxime dolor!
      </p>
    </div>
  );
}

export default StyleCard;
