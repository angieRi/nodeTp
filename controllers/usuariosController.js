const usuariosModel = require("../models/usuariosModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports={
    login:async function(req,res,next) {
        try{
            const usuario = await usuariosModel.findOne({email:req.body.email})
            if(!usuario){
                res.json({error: true, message: "Email incorrecto"})
                return
            }
            if(bcrypt.compareSync( req.body.password, usuario.password)){
                const token = jwt.sign({userId:usuario._id},req.app.get("secretKey"),{expiresIn:"1h"})
                res.json({token})
            }else{
                res.json({error: true, message: "Password incorrecto"})
            }
        }catch (e){
            res.json(e.message)
        }
    },
    create:async function(req,res,next) {

        try{
            const document = new usuariosModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            const response = await document.save()
            res.status(201).json(document);
        }catch (e){

            next(e)
        }
    },
}