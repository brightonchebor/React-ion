import React from "react";
import "./App.css";

import ComponentA from "./components/propdrilling/ComponentA";


const App = () => {
  
  const name = 'Bright'

  return (
    <div>
      

      {/* <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider> */}

      <ComponentA name={name} />
      
    </div>
  );
};

export default App;
