import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import {Form, Col, Row, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';


export function Home(){
    return(<Fragment>
        <div className="App">
        <header className="App-header">
          <h1>
            Tanqueo de Gasolina
          </h1>
        </header>
    </div>
    <br/>
    <Row className="mb-3" sm={3}> 
        <Form.Group as={Col} controlId="formGridTanquear">
            <Link to="/Tanquear">Tanquear carro (usuario externo)</Link>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSaldo">
            <Link to="/CargarSaldo">Cargar saldo</Link>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPrecio">
            <Link to="/Movimientos">Historial de movimientos</Link>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridDispo">
            <Link to="/Disponibilidad">Disponibilidad de Gasolina</Link>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridTanquear2">
            <Link to="/Tanquear/Vehiculo">Tanquear Vehículo (usuario interno)</Link>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridGestionar">
            <Link to="/Gestionar/Usuarios">Gestionar usuarios</Link>
        </Form.Group>            
    </Row>
</Fragment>
);
};
