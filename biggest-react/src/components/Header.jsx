import IconCOmponent from "./IconCOmponent";
const Header = () => {

  const headerStyle = {
    position: 'fixed',
    width: '100%',
    top: 0,
    textAlign: "center",
    fontSize: "1rem",
    // padding: "0px",
    color: 'white',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center', // you can change to 'flex-start' if you want left-aligned
    // gap: '10px', // spacing between icon and text
  
    
    
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