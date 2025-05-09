import React from "react";
import "./App.css";

import ComponentA from "./components/propdrilling/ComponentA";

import Counter from "./components/Counter";
import Header from "./components/Header";
import { UserProvider } from "./UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  
  const name = 'Bright'

  return (
    <div>
      {/* <Header /> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <Counter />
       */}

      {/* <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider> */}

      <ComponentA name={name} />
      
    </div>
  );
};

export default App;
