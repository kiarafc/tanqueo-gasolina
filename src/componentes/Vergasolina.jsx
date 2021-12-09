
import React from 'react'

const Vergasolina = () => {
    return (
        <div>
            <header className="App-header">
                <h1>
                    Ver estado de la gasolina
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
