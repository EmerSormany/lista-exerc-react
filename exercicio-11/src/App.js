import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { createContext, useState } from 'react';
import ButtonTheme from './components/ButtonTheme';

export const themeContext = createContext()

function App() {

  const [theme, setTheme ] = useState({bg: '#FFFFFF', txtColor: '#000000'})
  
  const handleBlackTheme = () => {
    setTheme({bg: '#282c34', txtColor: '#FFFFFF'})
  }

  const handleWhiteTheme = () => {
    setTheme({bg: '#FFFFFF', txtColor: '#000000'})
  }

  return (
    <body style={{backgroundColor: theme.bg, color: theme.txtColor}}>
      <themeContext.Provider value={{theme, handleBlackTheme, handleWhiteTheme}}>
        <div className="App">
          <Card />
          <header className="App-header">
            <ButtonTheme />
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
      </themeContext.Provider>
    </body>
  );
}

export default App;
