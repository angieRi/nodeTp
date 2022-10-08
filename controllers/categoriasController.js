const categoriasModel = require("../models/categoriasModel")

module.exports={
    getAll:async function(req,res,next) {
        try{
            const categorias = await categoriasModel.find()
            res.json(categorias);
        }catch (e){
            res.json(e.message)
        }
    },
    create:async function(req,res,next) {

        try{
            const document = new categoriasModel({
                name:req.body.name
            })
            const response = await document.save()
            res.status(201).json(document);
        }catch (e){

            next(e)
        }
    },
}