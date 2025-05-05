import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { UserProvider } from "./UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <div>
      {/* <Header /> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <Counter />
       */}

      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      
    </div>
  );
};

export default App;
