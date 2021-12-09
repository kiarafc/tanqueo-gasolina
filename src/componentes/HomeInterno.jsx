import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
 
const Homeinterno = () => {
    let navigate = useNavigate();
    return (
        <div className="app">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="nav-link active" to="/" >Perfil</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <Link className="nav-link" to="/Precio">Precios</Link>
                            <Link className="nav-link" to="/Disponibilidad">Disponibilidad</Link>
                            <Link className="nav-link" to="/Tanquear">Tanquear</Link>
                            <Link className="nav-link" to="/GestionarUsuarios">Gestión de usuarios</Link>                    
                        </div>
                    </div>
                </div>
            </nav>
            <Button variant="primary" type="submit" onClick={() => navigate('../')}>
                Regresar
            </Button>
        </div>
    );
}

export default Homeinterno
