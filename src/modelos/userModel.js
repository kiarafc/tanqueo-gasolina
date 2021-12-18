const { model, Schema } = require("mongoose");
const { genSalt, hash } = require("bcryptjs");

const userSchema = new Schema({
    nombre: {
        type: "string",
        unique: true,
        required: true
    },
    correo: {
        type: "email",
        unique: true,
        required: true
    },
    telefono: {
        type: "number",
        unique: true,
        required: true
    },
    direccion:{
        type: "string",
        required: true
    },
    usuario: {
        type: "string",
        required: true,
        unique: true,
        max: 20
    },
    password: {
        type: "string",
        required: true,
        min: 8
    },
    rol: {
        type: "string",
        required: true
    }
});

userSchema.pre("save", async function (next) {
    const salt = await genSalt(+process.env.BCRYPT_ROUNDS);
    this.password = await hash(this.password, salt);
    next();
})

const userModel = model("usuarios",userSchema);
exports.userModel = userModel;