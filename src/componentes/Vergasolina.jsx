
import React from 'react'
import {Link} from "react-router-dom";

const Vergasolina = () => {
    return (
        <div>
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
                    Estado de la gasolina
                </h1>
            </header>
            <table className="table m-4">
                <thead>
                    <tr>
                        <th scope="col">Productos</th>
                        <th scope="col">Precio/Galón</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gasolina Extra</td>
                        <td>100000 $</td>
                        <td>Habilitado</td>
                    </tr>
                    <tr>

                        <td>Gasolina Corriente</td>
                        <td>200000 $</td>
                        <td>Inhabilitado</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Vergasolina
