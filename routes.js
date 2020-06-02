const express = require("express");
const app= express();
const cors = require("cors");
const { controller } = require("./controller");

app.use(cors());
app.get("/", (req, res) =>{
    res.send("Gestor de tareas ");
});

app.get("/tareas", (req, res) => {
    controller.obtenerTarea(res);
})

app.get("/usuarios", (req, res) => {
    controller.obtenerUsuario(res);
})

app.get("/usuarios/:id_usuario", (req, res) => {
    let id_usuario = req.params.id_usuario
    controller.obtenerUsuarioid(id_usuario, res);
})

exports.app = app;