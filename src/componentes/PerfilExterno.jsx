import React from 'react'
import {Link} from "react-router-dom";

const PerfilExterno = () => {
    return (
        <div className="app">
            <header className="App-header">
          <h1>
            Tanqueo de Gasolina
          </h1>
        </header>
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
            <div className="container">
                <div className="main-body m-4">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ 'width': 150 }} className="rounded-circle" />
                                        <div className="mt-3">
                                            <h4>FOTO</h4>
                                        </div>
                                    </div>
                                </div>
                                <input type="file" className="form-control" id="customFile" />
                            </div>

                        </div>

                        <div className="col-md-8">
                            <h3 className="center">Datos basicos</h3>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Kenneth Valdez
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            fip@jukmuh.al
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (239) 816-9029
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (320) 380-4539
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                        <hr/>
                                     <div class ="row">
                                        <div class ="col-sm-12">
                                        <button className="btn btn-info " target="__blank">Editar</button>
                                         </div>
                                     </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>  

    )
}

export default PerfilExterno