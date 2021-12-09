import React from "react";

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
      <td>{contact.start}</td>
      <td>{contact.end}</td>
      <td>{contact.selecion}</td>
      <td>{contact.price}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          className="btn btn-secondary me-md-1"
        >
          Editar
        </button>
        <button type="button" className="btn btn-secondary me-md-1" onClick={() => handleDeleteClick(contact.id)}>
          Eliminar
          
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
