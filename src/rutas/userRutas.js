const { Router } = require("express");
const userRutas = Router();
const { userModel } = require("../modelos/userModel")
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { userGuard } = require("../guard/userGuard");

userRutas.post("/login", async function (req, res) {
    // Captura el usuario / password
    const { usuario, password } = req.body;
    // Buscar en BD el usuario
    const user = await userModel.findOne({ usuario });
    // Preguntar si existe el usuario
    if (!user) {
        return res.status(401).send({ estado: "error", msg: "Credenciales NO válidas" });
    }
    // Comparar el password bcrypt
    const passOK = await compare(password, user.password);
    if (passOK === true) {
        const token = sign(
            {
                usuario: user.usuario,
                rol: user.rol
            },
            process.env.JWT_SECRET_KEY
        )
        return res.status(200).send({ estado: "ok", msg: "Logueado :)", token });
    }
    return res.status(401).send({ estado: "error", msg: "Credenciales NO válidas" });
});

userRutas.post("/guardar", userGuard, function (req, res) {
    // Captura los datos
    const data = req.body;
    // Instancia el modelo y pobla con los datos
    const user = new userModel(data);
    // Guarda en BD
    if (data._id !== null && data._id !== "") {
        userModel.updateOne({ _id: data._id }, { $set: { nombre: data.nombre, correo: data.correo, telefono: data.telefono, direccion: data.direccion } }, function (error) {
            if (error) {
                console.log(error)
                return res.status(500).json({ estado: "error", msg: "ERROR: Información NO Guardada!" })
            }
            res.status(200).json({ estado: "ok", msg: "Datos actualizados!" })
        })
    } else {
        const { nombre, correo, telefono, direccion } = data;
        const datos = { nombre, correo, telefono, direccion };
        const usu = new userModel(datos);
        usu.save(function (error) {
            if (error) {
                res.send({ estado: "error", msg: "ERROR: Información NO Guardada :(" });
                return false;
            }
            res.send({ estado: "ok", msg: "Datos actualizados!" });
        })
    }
})
exports.userRutas = userRutas;