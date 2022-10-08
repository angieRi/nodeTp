const mongoose = require("../config/mongodb")

const productosShema = mongoose.Schema({
    name:{
        type:String,
        require:[true, "El campo {Path} es requerido"]
    },
    price:{
        type:Number,
        require: true
     },
    codepro:{
        type:Number,
        require: true
    },
    description:{
        type:String
    },
    categoria: {
        type: mongoose.Schema.ObjectId,
        ref: "categorias"
    },
    inhome: {
        type: Boolean,

    }
})
productosShema.set("toJSON",{getters:true, setters:true})
productosShema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model("productos",productosShema)