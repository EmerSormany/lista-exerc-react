import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import LoginCard from './componentes/LoginCard';
import UserCard from './componentes/UserCard';

export const loginUserContext = createContext()

function LoginCardProvider({children}) {
    const [user, setLogin] = useState({e: '', pass: '', loged: false})

    const handleLogin = (email, password) => {
      setLogin({e: email, pass: password, loged:true})
    }

    const value = {
      user,
      login: handleLogin
    }
    
    return (
      <loginUserContext.Provider value={value}>
        {children}
      </loginUserContext.Provider>
    )
}

function App() {
  return (
    <LoginCardProvider>
      <div className="App">
        <LoginCard />
        <UserCard />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    </LoginCardProvider>  
  );
}

export default App;
