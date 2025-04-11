import React from 'react'

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    fontSize: "1rem",
    color: 'white',
    
    
  };

  

  return (
    <footer style={footerStyle}>
      <h2
        style={{
          margin: '0',
          backgroundColor: "black",
          padding: "20px",
          left: "0",
          marginBottom: '0',
          
        }}
      >
        This is a footer
      </h2>
    </footer>
  );
}

export default Footer
