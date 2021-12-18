import { Link } from 'react-router-dom';
import React, { useRef, useState } from "react";

export function Home(){
    const usuarioRef = useRef();
    const passwordRef = useRef();
    //variables de estado
    const [error, setError] = useState();
    const [msgError, setMsgError] = useState();
    function login() {
        // Capturar los datos usu/pass
        const usuario = usuarioRef.current.value;
        const password = passwordRef.current.value;
        //Consumir API login
        fetch("http://localhost:3000/user/login", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ usuario, password })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    {
                        localStorage.setItem("token", res.token);
                        window.location.href = res.url
                    }
                } else {
                    setError(true);
                    setMsgError(res.msg);
                }
        })
    }
    return(
    <>
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
        <div>
            <link rel="stylesheet" href="/" />
        </div>
        {error && <div className="alert alert-danger" role="alert">{msgError}</div>}
            <form action="">
                <label htmlFor="">Usuario</label>
                <input ref={usuarioRef} className="form-control" type="text" />
                <label htmlFor="">Password</label>
                <input ref={passwordRef} className="form-control" type="password" />
                <button className="btn btn-primary" type="button" onClick={login}>Entrar</button>
            </form>
</>
);
};
