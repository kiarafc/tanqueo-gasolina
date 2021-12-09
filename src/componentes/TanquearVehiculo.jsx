import React, {Fragment} from 'react';
import {Button, Form, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function TanquearVehiculo(){
  let navigate = useNavigate();
  return (<Fragment> 
    <header className="App-header">
      <h1>
        Tanquear Vehículo
      </h1>
    </header>
    <br/>
    <Button variant="primary" type="submit" onClick={() => navigate('../')}>
        Regresar
    </Button>
    <div className="text-center">
        <Form.Group as={Col} controlId="formGridBuscar"  sm={15} className="text-center">
            <Form.Label className="text-right">Buscar cliente: </Form.Label>{' '}
            <input type="text"  />{' '}
            <Button variant="primary" type="submit" >Buscar </Button>
        </Form.Group>
    </div>
    <br/>
    <br/>
    <Form className="text-center" style={{'background-color':'#9ED0E6'}}>
        <br/>
        <Form.Group as={Row} className="mb-2" controlId="formtextNombre">
          <Form.Label column sm={4}>
            Nombre:
          </Form.Label>
          <Col sm={7} >
            <Form.Control type="text" placeholder="Nomber de usuario" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextTipo" >
          <Form.Label column sm={4}>
            Seleccionar vehículo:
          </Form.Label>
          <Col sm={7}>
            <Form.Select aria-label="Default select example">
              <option>Selecione un vehículo</option>
              <option value="1">Vehiculo1</option>
              <option value="2">Vehiculo2</option>
              <option value="3">Vehiculo3</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextGasolina">
          <Form.Label column sm={4}>
            Seleccionar tipo de gasolina:
          </Form.Label>
          <Col sm={7}>
            <Form.Select aria-label="Default select example">
              <option>Selecione el tipo de gasolina</option>
              <option value="extra">Gasolina Extra</option>
              <option value="Corriente">Gasolina Corriente</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Row className="mb-3" sm={2} style={{'background-color':'dodgerblue'}}> 
          <Form.Group as={Col} controlId="formGridEstado">
            <Form.Label>Inventario: XX gal </Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPrecio">
            <Form.Label>Precio: $xx/gal</Form.Label>
          </Form.Group>
        </Row>
        <Form.Group as={Row} className="mb-3" controlId="formtextCantidad">
          <Form.Label column sm={4}>
            Ingresar cantidad a tanquear:
          </Form.Label>
          <Col sm={7}>
            <Form.Control type="text" placeholder="Cantidad a tanquear" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextPagar" style={{'background-color':'#FFFFFF'}}>
            <Form.Label column sm={3}><br/>
                Total a pagar
            </Form.Label>
            <Col sm={3}><br/>
                <Form.Control type="text" placeholder="Ingrese cantidad"/>
            </Col>
            <Col sm={3}><br/>
                <Button variant="primary" type="submit">Finalizar</Button>
            </Col>
        </Form.Group>
    </Form>
  </Fragment>
);
};