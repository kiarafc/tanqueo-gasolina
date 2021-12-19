const { model, Schema } = require("mongoose");

const tiposSchema = new Schema({
    nombre:{
        type:"string",
        required: true
    },
    precio:{
        type: "number",
        required: true
    },
    inventario:{
        type: "number",
        required: true
    },
    estado:{
        type:"string",
        required:true
    }
});

const tiposModel = model("tipos",tiposSchema);
exports.tiposModel = tiposModel;