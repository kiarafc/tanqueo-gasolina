import React, {Fragment} from 'react';
import {Button, Form, Col, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

export function CargarSaldo(){
  let navigate = useNavigate();
  return(<Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="nav-link active" to="/Perfil/Externo" >Perfil</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <Link className="nav-link" to="/Tanquear">Tanquear</Link>
                            <Link className="nav-link" to="/CargarSaldo">Saldo</Link>
                            <Link className="nav-link" to="/Movimientos">Movimientos</Link>
                            <Link className="nav-link" to="/Gasolina">Ver gasolina</Link>                    
                        </div>
                    </div>
                    <Link className="nav-link active" to="/" >Inicio</Link>
                </div>
            </nav>
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
</Fragment>
);
};