import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import {Form, Col, Row, Button } from 'react-bootstrap';


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
        <Form.Group as={Col} controlId="formGridGestionar">
            <Link to="">Ver gasolina (usuario externo)</Link>
        </Form.Group>   
        <Form.Group as={Col} controlId="formGridGestionar">
            <Link to="/Perfil">Perfil (usuario interno)</Link>
        </Form.Group>   
        <Form.Group as={Col} controlId="formGridGestionar">
            <Link to="/Precio">Gestionar precios</Link>
        </Form.Group>               
    </Row>
</Fragment>
);
};
