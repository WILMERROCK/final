const express = require("express");
const {app} = require("./routes");


app.listen(27017, () => {
    console.log("Servidor conectado");
})

