import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import {Form, Col, Row } from 'react-bootstrap';

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
            <Link to="/Tanquear">Tanquear carro</Link>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSaldo">
            <Link to="/CargarSaldo">Cargar saldo</Link>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPrecio">
            <Link to="/Movimientos">Historial de movimientos</Link>
        </Form.Group>       
    </Row>
</Fragment>
);
};
