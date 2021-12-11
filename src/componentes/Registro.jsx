import React, { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {Form} from 'react-bootstrap';

export default function Registro() {
    let listado = [];
    const nomRef = useRef(); //document.getElementById("nom")
    const usuRef = useRef();
    const corRef = useRef();
    const numRef = useRef(); //document.getElementById("nom")
    const tipRef = useRef();
    const contRef = useRef();
    const confRef = useRef();
    const [success, setSuccess] = useState(false);
    const registro = () => {
        //Obtiene lo escrito en las cajas de texto
        const nom = nomRef.current.value;
        const usu = usuRef.current.value;
        const cor = corRef.current.value;
        const num = numRef.current.value;
        const tip = tipRef.current.value;
        const cont = contRef.current.value;
        const conf = confRef.current.value;
        //Crea el JSON de producto
        const prod = { nom, usu, cor, num, tip, cont, conf}; // {nom:nom, pre:pre}
        // Obtiene todos los productos almacenados
        listado = JSON.parse(localStorage.getItem("listaRegistro")) || [];
        //Adiciona un nuevo producto al array
        listado.push(prod);
        //Guarda en local Storage
        localStorage.setItem("listaRegistro", JSON.stringify(listado));
        //Limpia las cajas de texto
        nomRef.current.value = "";
        usuRef.current.value = "";
        corRef.current.value = "";
        numRef.current.value = "";
        tipRef.current.value = "";
        contRef.current.value = "";
        confRef.current.value = "";
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };
    return (
        <Fragment>
            <header className="App-header" >
          <h1>
            Tanqueo de Gasolina
          </h1>
        </header>
            {success && <div class="alert alert-success" role="alert">Registrado con éxito :)</div>}
            <br />
            <Form className="text-center">
                <label htmlFor="">Nombre</label>
                <input ref={nomRef} className="form-control" type="text" />
                <label htmlFor="">Usuario</label>
                <input ref={usuRef} className="form-control" type="text" />
                <label htmlFor="">Correo</label>
                <input ref={corRef} className="form-control" type="text" />
                <label htmlFor="">Numero de placa</label>
                <input ref={numRef} className="form-control" type="text" />
                <label htmlFor="">Tipo de vehiculo</label>
                <input ref={tipRef} className="form-control" type="text" />
                <label htmlFor="">Contraseña</label>
                <input ref={contRef} className="form-control" type="text" />
                <label htmlFor="">Confirmar contraseña</label>
                <input ref={confRef} className="form-control" type="text" />
                <br />
                <button className="btn btn-primary" type="button" onClick={registro}>REGISTRO</button>{' '}
                <Link to="/registro/lista">Inicia Sesion</Link>
                
            </Form>
        </Fragment>
    )
}