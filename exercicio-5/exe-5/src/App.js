import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import { createContext, useState } from 'react';

export const AlertContext = createContext()

function App() {
  const [alert, setAlert] = useState(false)
  console.log(alert);
  
  return (
    <div className="App">
      <AlertContext.Provider value={{alert, setAlert}}>
        <Alert />
      </AlertContext.Provider>
      <button onClick={()=> setAlert(!alert)}>Alert</button>

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
  );
}

export default App;
