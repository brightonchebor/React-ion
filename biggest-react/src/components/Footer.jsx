import React from 'react'

const Footer = () => {
  const footerStyle = {
    bottom: 0,
    textAlign: "center",
    fontSize: "1rem",
    padding: "0px",
    color: 'white',
    
  };

  

  return (
    <header style={footerStyle}>
      <h2
        style={{
          margin: 0,
          backgroundColor: "black",
          padding: "20px",
          left: "0",
          marginTop: "1rem",
          marginBottom: '0',
          
        }}
      >
        This is a footer
      </h2>
    </header>
  );
}

export default Footer
