import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import {useState} from 'react';

function App() {

  const [rgb, setRGB] = useState();

  return (
    <div className="App">
      <Button color={{rgb}}/>
      <>
      <button onClick={() => setRGB("#0000FF")}>Azul</button>
      <button onClick={() => setRGB("#FF0000")}>Vermelho</button>
      <button onClick={() => setRGB("#00FF00")}>Verde</button>
      <button onClick={() => setRGB("#FFFF00")}>Amarelo</button>
      </>
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
