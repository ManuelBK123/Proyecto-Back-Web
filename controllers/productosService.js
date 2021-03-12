const productosDAO = require('../models/productosDAO')

const getAllProductos = (req, res) => {
    productosDAO.getAllProductos(data => {
        try{
            if (!data) throw new Err("No se encontraron Productos")
            res.send({
                status: true, data: data
            })
        }
        catch (Err){
            res.send({
                status: false, message: 'No se encontraron Productos'
            })
        }
    })
}
const getProductoId = (req, res) => {
    productosDAO.getByIdProducto(req.params.idProducto,data => {
        try{
            if(!data) throw new Error("No existe el Producto")
            res.send({
                status : true,
                body : data
            })
        }
        catch (Err){
            res.send({
                status: false,
                message: 'Producto no encontrado'
            })
        }
    })
}
const getProductoNombre = (req, res) => {
    productosDAO.getByNombreProducto(req.params.nombre,data => {
        try{
            if(!data) throw new Error("No existe el Producto")
            res.send({
                status : true,
                body : data
            })
        }
        catch (Err){
            res.send({
                status: false,
                message: 'Producto no encontrado'
            })
        }
    })
}

const addProducto = (req, res) =>{
    const producto = {
        idProveedor : req.body.idProveedor,
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        precio: req.body.precio,
        existencias : req.body.existencias
    }
    productosDAO.insertProducto(producto, (data) =>{
        if(data && data.affectedRows === 1){
            res.send({
                status: true,
                message: 'Producto creado correctamente'
            })
        } else {
            res.send({
                status: false,
                message: 'Ha ocurrido un error al crear el Producto'
            })
        }
    })
}

module.exports = {
    getAllProductos,
    getProductoId,
    getProductoNombre,
    addProducto,
}
