const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt")

const usuariosShema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
});
usuariosShema.pre("save",function (next){
    this.password = bcrypt.hashSync(this.password,10)
    next()
})
module.exports = mongoose.model("usuarios",usuariosShema)