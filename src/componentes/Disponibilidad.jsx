import React, {Fragment} from 'react';
import {Table, Form, Button, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

export function Disponibilidad(){
    return(<Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="nav-link active" to="/Perfil" >Perfil</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link" to="/Precio">Precios</Link>
                        <Link className="nav-link" to="/Disponibilidad">Disponibilidad</Link>
                        <Link className="nav-link" to="/Tanquear/Vehiculo">Tanquear Vehículo </Link>
                        <Link className="nav-link" to="/GestionarUsuarios">Gestión de usuarios</Link>                    
                    </div>
                </div>
            </div>
        </nav>
        <header className="App-header">
            <h1>
                Disponibilidad de Gasolina
            </h1>
        </header>
        <br/>
        <h3>Inventario</h3>
        <br />
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