const { model, Schema } = require("mongoose");

const tanquearSchema = new Schema({
    nombre:{
        type:"string",
        required: true
    },
    vehiculo:{
        type: "string",
        required: true
    },
    tipo:{
        type: Schema.ObjectId,
        ref: "tipos"
    },
    cantidad:{
        type:"number",
        required:true
    },
    total:{
        type:"number",
        required:true
    }
});

const tanquearModel = model("movimientos",tanquearSchema);
exports.tanquearModel = tanquearModel;