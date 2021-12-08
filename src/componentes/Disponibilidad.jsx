import React, {Fragment} from 'react';
import {Table, Form, Button, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function Disponibilidad(){
    let navigate = useNavigate();
    return(<Fragment>
    <header className="App-header">
      <h1>
        Disponibilidad de Gasolina
      </h1>
    </header>
    <br/>
    <Button variant="primary" type="submit" style={{'alignSelf':'Grid'}} onClick={() => navigate('../')}>
      Regresar
    </Button>
    <Form.Group as={Col} controlId="formGridInventario">
        <br /><Form.Label className="text-left">Inventario </Form.Label>
    </Form.Group>
    <Table responsive= "md" striped bordered hover variant="light" size="sm-2">
        <thead>
            <tr>
            <th>Tipo de Gasolina</th>
            <th>Cantidad disponible (galones)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Gasolina Corriente</td>
            <td>xx</td>
            </tr>
            <tr>
            <td>Gasolina Extra</td>
            <td>xx</td>
            </tr>
        </tbody>
    </Table>
    <div className="text-center">
        <Button variant="primary" type="submit" >
            Editar
        </Button>{' '}
        <Button variant="primary" type="submit" >
            Guardar
        </Button>
    </div>
</Fragment>
);
};