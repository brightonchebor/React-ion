const Header = () => {
  const headerStyle = {
    position: "absolute",
    top: 0,
    width: "100%",
    textAlign: "center",
    fontSize: "1rem",
    padding: "0.5rem",
    background: "#f9f9f9",
  };

  return (
    <header style={headerStyle}>
      <h2 style={{ margin: 0 }}>Welcome to React Bookstore</h2>
    </header>
  );
};

export default Header;
