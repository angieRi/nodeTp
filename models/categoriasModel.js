const mongoose = require("../config/mongodb")

const categoriasShema = new mongoose.Schema({
    name: String
});
module.exports = mongoose.model("categorias",categoriasShema)