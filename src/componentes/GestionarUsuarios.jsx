import React, {Fragment} from 'react';
import {Button, Form, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function GestionarUsuarios(){
  let navigate = useNavigate();
  return (<Fragment>
    <header className="App-header">
      <h1>
        Gestionar Usuarios
      </h1>
    </header>
    <br/>
    <Button variant="primary" type="submit" onClick={() => navigate('../')}>
        Regresar
    </Button>
    <div className="text-center">
        <Form.Group as={Col} controlId="formGridBuscar"  sm={15} className="text-center">
            <Form.Label className="text-right">Buscar Usuario: </Form.Label>{' '}
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
            Vehículos:
          </Form.Label>
          <Col sm={7}>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={4}>
                Estado:
            </Form.Label>
            <Col sm={7}>
                <Form.Check
                inline
                type="radio"
                label="Habilitado"
                id="Habilitado"
                />
                <Form.Check
                inline
                type="radio"
                label="Inhabilitado"
                id="Inhabilitado"
                />
            </Col>
        </Form.Group>
    </Form><br />
    <div className="text-center">
        <Button variant="primary" type="submit"  >Guardar</Button>
    </div>
  </Fragment>
);
};