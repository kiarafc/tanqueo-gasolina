import React, { Fragment, useRef, useState } from 'react';
import {Link} from "react-router-dom";

export function Modificar() {
    let listado = [];
    const nombRef = useRef(); //document.getElementById("nom")
    const tipoRef = useRef();
    const numeRef = useRef(); //document.getElementById("nom")
    const [success, setSuccess] = useState(false);
    const editar = () => {
    //const cancelar =() => 
        //Obtiene lo escrito en las cajas de texto
        const nomb = nombRef.current.value;
        const tipo = tipoRef.current.value;
        const nume = numeRef.current.value;
        
        //Crea el JSON de producto
        const prod = { nomb, tipo, nume}; // {nom:nom, pre:pre}
        // Obtiene todos los productos almacenados
        listado = JSON.parse(localStorage.getItem("listaModificar")) || [];
        //Adiciona un nuevo producto al array
        listado.push(prod);
        //Guarda en local Storage
        localStorage.setItem("listaModificar", JSON.stringify(listado));
        //Limpia las cajas de texto
        nombRef.current.value = "";
        tipoRef.current.value = "";
        numeRef.current.value = "";
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };
    return (
        <Fragment>
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
                    Editar vehículos
                </h1>
            </header>
            <br />
            {success && <div class="alert alert-success" role="alert">Editado con éxito :)</div>}
            <form action="">
                <label htmlFor="">Nombre</label>
                <input ref={nombRef} className="form-control" type="text" />
                <label htmlFor="">Tipo de vehiculo</label>
                <input ref={tipoRef} className="form-control" type="text" />
                <label htmlFor="">Numero de placa</label>
                <input ref={numeRef} className="form-control" type="text" />
                <br />
                <button className="btn btn-primary" type="button" onClick={editar}>Editar</button>
                {' '}<button className="btn btn-primary" type="button" onClick={editar}>Cancelar</button>
                
            </form>
        </Fragment>
    )
}