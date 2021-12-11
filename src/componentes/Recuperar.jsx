import React from 'react';
import { Fragment, success, ingRef } from 'react';


export default function Recuperar() {
    const listado = JSON.parse(localStorage.getItem("listaRegistro"));
    return (
        <Fragment>
            <header className="App-header">
          <h1>
            Tanqueo de Gasolina
          </h1>
        </header>
            {success && <div class="alert alert-success" role="alert">Enviado al correo :)</div>}
            <form action="">
                <br />

                <label htmlFor="">1. Ingrese su direccion</label>
                <input ref={ingRef} className="form-control" type="text" />
                <br />
                <button className="btn btn-primary" type="button" >ENVIAR UN CORREO PARA RESTABLECER CONTRASEÑA</button>
                <br />
                <br />
                <label htmlFor="">2. Vaya a su correo y siga el enlace</label>
                <p>Despues de hacer clic en el boton de arriba, se le enviara un correo electronico 
                    con un enlace que lo llevara a la pagina de restablecimiento de contraseña</p>                
            </form>
        </Fragment>
    )
}