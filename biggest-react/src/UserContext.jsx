import { useState, createContext } from 'react'

const UserContext = createContext()


const UserProvider = ({children}) => {

    const [user, setUser] = useState({name: 'John Doe'})

    const updateUser = (newName) => {
        setUser({name: newName});
    }
    return (
      <div>
        <UserContext.Provider value={{ user, updateUser }}>
          {children}
        </UserContext.Provider>
      </div>
    );
}

export {UserContext, UserProvider}
