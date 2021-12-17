import React, {Fragment} from 'react';
import {Table, Form, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

export function HistorialMovimiento(){
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
                            <Link className="nav-link" to="/Modificar">Editar vehículos</Link>                 
                        </div>
                    </div>
                    <Link className="nav-link active" to="/" >Inicio</Link>
                </div>
            </nav>
    <header className="App-header">
      <h1>
        Historial de movimientos y saldo
      </h1>
    </header>
    <br/>
    <Form.Group as={Col} controlId="formGridDisponible"  sm={10} style={{'textAlign': 'right'}}>
        <Form.Label className="text-right">Saldo Disponible: $xx</Form.Label>
    </Form.Group>
    <h3>Movimientos</h3>
    <br />
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