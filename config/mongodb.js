const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")
mongoose.connect("mongodb://localhost/db-mongo",function (error){
    if(error){
        throw error
    }else{
        console.log("Conectado con Mongo DB")
    }
})
mongoosePaginate.paginate.options={
    limit:10
}
mongoose.mongoosePaginate = mongoosePaginate
module.exports = mongoose