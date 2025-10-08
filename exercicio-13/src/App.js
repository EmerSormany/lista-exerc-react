import './App.css';
import Content from './componentes/content/Contente';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Sidebar from './componentes/siderbar/Siderbar';


function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className='content-container'>
        <Sidebar />
        <div className='content-area'>
          <Content />
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
