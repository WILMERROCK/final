const mongoose = require("mongoose");
const Usuario = require("./Usuario");
const Tarea = require("./Tarea");

class Controller{
    constructor(){
        this.connect();
    }
   async connect(){
       try{

           await mongoose.connect(
               "mongodb+srv://wilmerj:wil12345@tareas0-y5fx5.mongodb.net/gestortareas?retryWrites=true&w=majority",
               {useNewUrlParser:true}
           );
           console.log("conectado");

       } catch(e){
           console.error(e);
       }
   }

   obtenerUsuario(res){
    Usuario.find({}, (err, usuarios)=>{
        if(err) throw err;

        res.send(usuarios);
    })

}
    obtenerUsuarioid(res){
        Usuario.find({_id:id_usuario}, (err, usuario) => {
            if(err) throw err;

            res.send(usuarios);
        })
    }
    
    obtenerTarea(res){
    Tarea.find({}, (err, tareas)=>{
        if(err) throw err;

        res.send(tareas);
    })
    
}
    
}
exports.controller = new Controller();