import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Navbar} from 'react-bootstrap';
import { TanquearCarro } from './componentes/TanquearCarro.jsx';
import { CargarSaldo} from './componentes/CargarSaldo.jsx';
import { HistorialMovimiento } from './componentes/HistorialMovimiento.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './componentes/Home.jsx'

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tanquear" element={<TanquearCarro />}/>
        <Route path="/CargarSaldo" element={<CargarSaldo />}/>
        <Route path="/Movimientos" element={<HistorialMovimiento/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
