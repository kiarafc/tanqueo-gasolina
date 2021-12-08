import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Navbar} from 'react-bootstrap';
import { TanquearCarro } from './componentes/TanquearCarro.jsx';
import { CargarSaldo} from './componentes/CargarSaldo.jsx';
import { HistorialMovimiento } from './componentes/HistorialMovimiento.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './componentes/Home.jsx'
import { Disponibilidad } from './componentes/Disponibilidad.jsx'
import { TanquearVehiculo } from './componentes/TanquearVehiculo';
import { GestionarUsuarios } from './componentes/GestionarUsuarios';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tanquear" element={<TanquearCarro />}/>
        <Route path="/CargarSaldo" element={<CargarSaldo />}/>
        <Route path="/Movimientos" element={<HistorialMovimiento/>}/>
        <Route path="/Disponibilidad" element={<Disponibilidad/>} />
        <Route path="/Tanquear/Vehiculo" element={<TanquearVehiculo/>} />
        <Route path="/Gestionar/Usuarios" element={<GestionarUsuarios/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
