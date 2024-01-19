import CnxMongoDB from "../../DBMongo.js"
import { CarritoModel } from "../models/carrito.js"

class ModelMongoDB {

    obtenerCarrito = async () => {
        if(!CnxMongoDB.connection) return []
        const carrito = await CarritoModel.find({})
        return carrito
    }

    guardarCarrito = async carrito => {
        if(!CnxMongoDB.connection) return {}
        console.log('dao',carrito)  //aca no anda.. el carrito model. 
        const carritoModel = new CarritoModel(carrito)
        console.log('dao 2',carritoModel)
        const carritoGuardado = await carritoModel.save()
        return carritoGuardado
    }
}

export default ModelMongoDB