import { useState } from 'react';
import Button from './components/Button';
import './App.css';

const variantsCycle = ['primary', 'secondary', 'danger', 'peace'];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleColorChange = () => {
    const nextIndex = (currentIndex + 1) % variantsCycle.length;
    
    setCurrentIndex(nextIndex);
  };

  const currentVariant = variantsCycle[currentIndex];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Botão de Cores</h1>
        <div>
          <Button variant={currentVariant} onClick={handleColorChange}>
            Clique para Mudar a Cor
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;