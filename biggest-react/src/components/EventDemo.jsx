import React from "react";
import { useState } from "react";
import { GiButtonFinger } from "react-icons/gi";

const EventDemo = () => {
  // const [button, setButton] = useState("Click Me!");
  // const handleButton = () => {
  //   setButton("Button Clicked");
  // };

  const Button = () => {
    const handleClick = () => {
      console.log(Math.round(Math.random() * 10));
    }
    return (
      <button onClick={handleClick}>
        Click Me
      </button>
    )
  }

  const [copy, setCopy] = useState("Copy Me!");
  const handleCopy = () => {
    setCopy("Text Copied");
  };

  const [hover, setHover] = useState({});
  const handleHover = () => {
    setHover({ backgroundColor: "lightyellow" });
  };
  const handleHoverOut = () => {
    setHover({});
  };

  return (
    <div>
      <div>
        {/* <button onClick={handleButton}>{button}</button>
        <p></p> */}

        <Button />
      </div>

      <div>
        <p onCopy={handleCopy}>{copy}</p>
      </div>

      <div>
        <p
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
          // style={hoverStyle}
        >
          Hover over me!
        </p>
      </div>
    </div>
  );
};

export default EventDemo;
