
import React from 'react';
import {useState,Fragment} from 'react';
import { nanoid } from "nanoid";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import {Link} from "react-router-dom";

//import ReadOnlyRow from "./components/ReadOnlyRow";
//import  EditableRow  from './components/EditableRow'
const data = [ 
    {
        "id":"1",
        "start": "2021-12-01",
        "end": "2021-12-03",
        "selecion": "Gasolina extra",
        "price": "123456",
    }
]

export default function Precio() {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        start: "",
        end: "",
        selecion: "",
        price: "",
    });

    const [editFormData, setEditFormData] = useState({
        start: "",
        end: "",
        selecion: "",
        price: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            start: addFormData.start,
            end: addFormData.end,
            selecion: addFormData.selecion,
            price: addFormData.price,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            start: editFormData.start,
            end: editFormData.end,
            selecion: editFormData.selecion,
            price: editFormData.price,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            start: contact.start,
            end: contact.end,
            selecion: contact.selecion,
            price: contact.price,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };


    return (
        
        <> 
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
        <br />
        <header >
            <h3>
            Gestionar Precios
            </h3>
        </header>
        
        <div class="container p-5 text-center ">
            <div class="abs-center">
                <form className="form-horizontal" onSubmit={handleAddFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="startdate" className="form-label m-1">Rango de fecha</label>
                        <input
                            
                           
                            type="date"
                            required="required"
                            name="start"
                            style={{ width: "200px" }}
                            onChange={handleAddFormChange}
                        />
                        <span className="m-3" style={{ opacitjuy: "0.6", fontSize: "20px" }}>-</span>
                        <input
                            onChange={handleAddFormChange}
                           
                            type="date"
                            required="required"
                            name="end"
                            style={{ width: "200px" }}
                        />
                    </div>
                    <label className="form-label m-1">Tipo de gasolina</label>
                    <select
                        required="required"
                        onChange={handleAddFormChange}
                        name="selecion"
                        className="custom-select mr-sm-2"
                      >
                        <option selected></option>
                        <option value="Gasolina extra">Gasolina extra</option>
                        <option value="Gasolina corriente">Gasolina corriente</option>
                    </select>
                    <label className="form-label m-3">Precio</label>
                    <input onChange={handleAddFormChange}  required="required" name="price" type="text"  style={{ width: "200px" }} />

                    <div className="d-grid gap-2 d-md-flex justify-content-center p-4">
                        <button type="submit" className="btn btn-secondary me-md-1" >Guardar</button>
                    </div>
                </form >
                <form onSubmit={handleEditFormSubmit}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Fecha de inicio</th>
                                <th>Fecha final</th>
                                <th>Tipo de gasolina</th>
                                <th>precio</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <Fragment>
                                    {editContactId === contact.id ? (
                                        <EditableRow
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                        />
                                    ) : (
                                        <ReadOnlyRow
                                            contact={contact}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </>
    );
}