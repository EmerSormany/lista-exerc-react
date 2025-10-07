import logo from './logo.svg';
import './App.css';
import {createContext, useState} from 'react'
import ColorButton from './components/ColorButton';

export const bgColorContext =  createContext()


function App() {

  const [colorBG, setColorBG] = useState('#282c34')
  
  return (
    <bgColorContext.Provider value={{ setColorBG}}>
      <div className="App">
        <ColorButton />
        <header className="App-header" style={{backgroundColor: colorBG}}>
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
    </bgColorContext.Provider>
  );
}

export default App;
