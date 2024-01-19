import mongoose from 'mongoose'


const carritoSchema = mongoose.Schema({
    //compra: Object,
    //pedido: Array
    
    pedido: [{ _id: String,nombre: String,
     precio: Number,
     stock: Number,
     marca: String,
     detalles: String,
     foto: String,
     envio: Boolean,
     id: String,
     cantidad: Number}]     
},{versionKey: false})

export const CarritoModel = mongoose.model('carritos', carritoSchema)