const productosModel = require("../models/productosModel")

module.exports={
    getAll: async function(req,res,next) {
        try{
            const productos = await productosModel.find().populate('categoria')
            res.status(200).json(productos);
        }catch (e){
            res.json(e.message)
        }
     },
    getPaginate:async function(req,res,next) {
        try{
            const productos = await productosModel.paginate(req.params.id,{
                sort:{price:1},
                page:1,
                populate:"categoria"
            })
            res.status(200).json(productos);
        }catch (e){
            res.json(e.message)
        }
     },
    getById: async function(req,res,next) {
        console.log("params",req.params,req.params.id)
        try{
            const producto = await productosModel.findById(req.params.id)
            res.status(200).json(producto);
        }catch (e){
            res.json(e.message)
        }
    },
    getInHome: async function(req,res,next) {
        try{
            const productos = await productosModel.find({ inhome: true }).populate("categoria")
            res.json(productos);
        }catch (e){
            res.json(e.message)
        }
    },
    create: async (req,res,next)=>{
        try{
            const producto = new productosModel({
                name:req.body.name,
                price:req.body.price,
                codepro:req.body.codepro,
                description:req.body.description,
                categoria:req.body.categoria,
                inhome:req.body.inhome,
            })
            const document = await producto.save()
            res.status(201).json(document);
        }catch (e){
            e.status = 400
           next(e)
        }
    },
    update: async (req,res,next)=>{
        try {
            const document = await productosModel.updateOne({_id: req.params.id}, req.body)
            res.json(document);
        } catch (e) {
            res.json(e.message)
        }
    },
    delete: async (req,res,next)=>{
        try {
            const document = await productosModel.deleteOne({_id: req.params.id})
            res.json(document);
        } catch (e) {
            res.json(e.message)
        }
    },
 }