const { Router } = require("express");
const { userAuthGuard } = require("../guard/userAuthGuard");
const tanquearRutas = Router();
const { tanquearModel } = require("../modelos/tanquearModel");

tanquearRutas.post("/guardar", userAuthGuard, function (req, res) {
    const data = req.body;
    const ventas = new tanquearModel(data);
    ventas.save(function (error) {
        if (error) {
            console.log(error)
            return res.status(500).json({ estado: "error", msg: "ERROR: operación fallida" });
        }
        res.status(200).send({ estado: "ok", msg: "Tanqueo éxitoso" })
    })
});

tanquearRutas.get("/listar", userAuthGuard, function (req, res) {
    tanquearModel.find({}, function (err, ventas) {
        productosModel.populate(ventas, { path: "producto" }, function (err, ventas) {
            console.log(err)
            res.status(200).send({ estado: "ok", msg: "Ventas", data: ventas })
        })
    })
})

exports.ventasRutas = ventasRutas;