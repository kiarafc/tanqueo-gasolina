import React from "react";

const EditableRow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input
                    type="date"
                    required="required"
                    name="start"
                    value={editFormData.start}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="date"
                    required="required"
                    name="end"
                    value={editFormData.end}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>

                <select
                    required="required"
                    name="selecion"
                    value={editFormData.selecion}
                    onChange={handleEditFormChange}
                >
                    <option selected></option>
                    <option value="Gasolina extra">Gasolina extra</option>
                    <option value="Gasolina corriente">Gasolina corriente</option>
                </select>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Precio"
                    name="price"
                    value={editFormData.price}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit" className="btn btn-secondary me-md-1" >Save</button>
                <button type="button" className="btn btn-secondary me-md-1" onClick={handleCancelClick}>
                    Cancelar
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;
