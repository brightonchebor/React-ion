const Header = () => {

  const headerStyle = {
    position: 'fixed',
    width: '100%',
    top: 0,
    textAlign: "center",
    fontSize: "1rem",
    padding: "0px",
    color: 'white',
    
    
  };

  

  return (
    <header style={headerStyle}>
      <h2
        style={{
          margin: 0,
          backgroundColor: "black",
          padding: "5px",
          left: "0",
          marginBottom: "1rem",
          padding: "20px"

        }}
      >
        Welcome to React Bookstore
      </h2>
    </header>
  );
};

export default Header;