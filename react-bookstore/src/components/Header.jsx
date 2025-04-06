const Header = () => {

  const headerStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    textAlign: "center",
    fontSize: "1rem",
    padding: "10px",
    background: "black",
    color: 'white',
    left: '0',
    
  };

  return (
    <header style={headerStyle}>
      <h2 style={{ margin: 0 }}>Welcome to React Bookstore</h2>
    </header>
  );
};

export default Header;
