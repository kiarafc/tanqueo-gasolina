import React, {Fragment} from 'react';
import {Table, Form, Button, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function HistorialMovimiento(){
    let navigate = useNavigate();
    return(<Fragment>
    <header className="App-header">
      <h1>
        Historial de movimientos y saldo
      </h1>
    </header>
    <br/>
    <Button variant="primary" type="submit" onClick={() => navigate('../')}>
      Regresar
    </Button>
    <Form.Group as={Col} controlId="formGridDisponible"  sm={10} style={{'textAlign': 'right'}}>
        <Form.Label className="text-right">Saldo Disponible: $xx</Form.Label>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridMovimiento">
        <Form.Label className="text-left">Movimientos </Form.Label>
    </Form.Group>
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>xx</td>
            <td>xx</td>
            <td>xx</td>
            </tr>
            <tr>
            <td>xx</td>
            <td>xx</td>
            <td>xxx</td>
            </tr>
        </tbody>
    </Table>
</Fragment>
);
};