import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="product-container">
        <ProductCard
          title="Fone de Ouvido Bluetooth"
          price="R$ 249,90"
          imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
        />
        <ProductCard
          title="Smartwatch Moderno"
          price="R$ 499,00"
          imageUrl="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop"
        />
        <ProductCard
          title="Câmera Fotográfica"
          price="R$ 1.899,99"
          imageUrl="https://images.unsplash.com/photo-1510127034890-ba27e88e2b8e?q=80&w=1000&auto=format&fit=crop"
        />
      </div>
    </div>
  );
}

export default App;