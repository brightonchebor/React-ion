import React from "react";
import "./App.css";
import UserProfile from "./components/context/UserProfile";
import UpdateUser from "./components/context/UpdateUser";

const App = () => {
  

  return (
    <div>
      

      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider> 

      
      
    </div>
  );
};


export default App;
