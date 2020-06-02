
//mongoose permite administrar la base de datos mongodb
const mongoose = require("mongoose");
//se obtiene la libreria de squemas de mongoose
const Schema = mongoose.Schema;
//se crea un esquema con base a los datos del modelo
const UsuarioSchema = new Schema({
    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    apodo: String,
    rol: String,
    contraseña: String,
})
//se crea el modelo User a partir del esquema UserSchema
var Usuario = mongoose.model("Usuario", UsuarioSchema);
//se exporta el modelo user para ser utilizado por el controllador(controller)
module.exports =  Usuario;

