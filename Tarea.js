
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
   
    fecha: Date,
    prioridad: String,
    nombre: String,
    descripcion: String,
    id_usuario: {
        type:Schema.Types.ObjectId,
        ref: "Usuario"
    },

})
var tarea = mongoose.model("tarea", tareaSchema);
module.exports =  tarea;
