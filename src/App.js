import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TanquearCarro } from './componentes/TanquearCarro.jsx';
import { CargarSaldo} from './componentes/CargarSaldo.jsx';
import { HistorialMovimiento } from './componentes/HistorialMovimiento.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './componentes/Home.jsx'
import { Disponibilidad } from './componentes/Disponibilidad.jsx'
import { TanquearVehiculo } from './componentes/TanquearVehiculo';
import { GestionarUsuarios } from './componentes/GestionarUsuarios';
import HomeInterno  from './componentes/HomeInterno';
import Perfil from './componentes/Perfil';
import Precio from './componentes/Precio';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeInterno />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Tanquear" element={<TanquearCarro />}/>
        <Route path="/CargarSaldo" element={<CargarSaldo />}/>
        <Route path="/Movimientos" element={<HistorialMovimiento/>}/>
        <Route path="/Disponibilidad" element={<Disponibilidad/>} />
        <Route path="/Tanquear/Vehiculo" element={<TanquearVehiculo/>} />
        <Route path="/Gestionar/Usuarios" element={<GestionarUsuarios/>} />
        <Route path="/Perfil"  element={<Perfil/>}/>
        <Route path="/Precio" element={<Precio/>}/>
        <Route path="/Disponibilidad"element={<Disponibilidad/>}/>
        <Route path="/GestionarUsuarios" element={<GestionarUsuarios/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
