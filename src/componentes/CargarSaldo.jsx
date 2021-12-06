import React, {Fragment} from 'react';
import {Button, Form, Col, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function CargarSaldo(){
  let navigate = useNavigate();
  return(<Fragment>
    <header className="App-header">
      <h1>
        Cargar saldo
      </h1>
    </header>
    <br/>
    <Form.Group as={Col} controlId="formGridDisponible"  sm={10} style={{'textAlign': 'right'}}>
      <Form.Label className="text-right">Saldo Disponible: $xx</Form.Label>
    </Form.Group>
    <br/>
    <Form className="text-center">
        <Form.Group as={Row} className="mb-3" controlId="formtextMedio">
            <Form.Label column sm={3}>
                Medio de pago
            </Form.Label>
            <Col sm={6}>
                <Form.Select aria-label="Default select example">
                    <option>Selecione el tipo de targeta a pagar</option>
                    <option value="Debito">Débito</option>
                    <option value="Credito">Crédito</option>
                </Form.Select>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextTarjeta">
          <Form.Label column sm={3}>
            Número de la tarjeta
          </Form.Label>
          <Col sm={6} >
            <Form.Control type="text" placeholder="Número de la tarjeta" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextNombre">
          <Form.Label column sm={3}>
            Nombres y apellidos
          </Form.Label>
          <Col sm={6} >
            <Form.Control type="text" placeholder="Nombres y apellidos"/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextFecha">
          <Form.Label column sm={3}>
            Fecha de expedición
          </Form.Label>
          <Col sm={6} >
            <Form.Control type="text" placeholder="Fecha de expedición"/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextCodigo">
          <Form.Label column sm={3}>
            Código de seguridad
          </Form.Label>
          <Col sm={6} >
            <Form.Control type="text" placeholder="Código de seguridad"/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextMonto">
          <Form.Label column sm={3}>
            Monto a cargar
          </Form.Label>
          <Col sm={6} >
            <Form.Control type="text" placeholder="Cantidad en pesos a depositar"/>
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
            Pagar
        </Button>
    </Form>
    <br/>
    <br/>
    <Button variant="primary" type="submit" onClick={() => navigate('../')}>
      Regresar
    </Button>
</Fragment>
);
};