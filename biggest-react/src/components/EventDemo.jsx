import React from "react";
import { useState } from "react";
import { GiButtonFinger } from "react-icons/gi";

const EventDemo = () => {
  const [button, setButton] = useState("Click Me!");
  const handleButton = () => {
    setButton("Button Clicked");
  };

  // const Button = () => {
  //   const handleClick = () => {
  //     console.log(Math.round(Math.random() * 10));
  //   }
  //   return (
  //     <button onClick={handleClick}>
  //       Click Me
  //     </button>
  //   )
  // }

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


  const Move = () => {
    function moveHandler() {
      alert("Mouse Move Event Fired");
      console.log("Mouse Move Event Fired");
    }
  
    return (
      <p onMouseOver={moveHandler} style={{ backgroundColor: "lightyellow" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
        laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
        eveniet voluptates suscipit.
      </p>
    );
  };

  return (
    <div>
      <div>
        <button onClick={handleButton}>{button}</button>
        <p></p>

        {/* <Button /> */}
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

      <div>
        <Move />
      </div>
    </div>
  );
};

export default EventDemo;
