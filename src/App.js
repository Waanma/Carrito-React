import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/navbar';
import CartWidget from './components/cartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  const onHandlerClick = () => {
    setOpen(!isOpen);
  }
  return (
    <div className="contenedor">
      <NavBar>
        <div className='logo-titulo'>
      <img src='https://cdn-icons-png.flaticon.com/512/735/735241.png' alt='icono' className='icono'></img>
      <h2>Me Impress</h2>
      </div>
      <div class="input-group rounded input-contenedor">
        <input type="search" class="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
          <button class="input-group-text border-0 bg-success btn-search" id="search-addon">
          <img src='https://cdn-icons-png.flaticon.com/512/598/598494.png' alt='Buscar'></img>
          </button>
      </div>
        <CartWidget onHandlerClick={onHandlerClick}/>
        
      </NavBar>

      <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
        
        <h2>Carrito</h2>
      </Sidebar>

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;