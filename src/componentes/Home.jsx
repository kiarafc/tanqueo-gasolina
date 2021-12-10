import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

export function Home(){
    return(<Fragment>
        <header className="App-header">
          <h1>
            Tanqueo de Gasolina
          </h1>
        </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="nav-link active" to="/" >Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <Link className="nav-link" to="/Perfil">Perfil (usuario interno)</Link>
                            <Link className="nav-link" to="/Perfil/Externo">Perfil (usuario externo)</Link>
                            <Link className="nav-link" to="/Administrador">Administrador</Link>                  
                        </div>
                    </div>
                </div>
            </nav>
    <br/>
</Fragment>
);
};
