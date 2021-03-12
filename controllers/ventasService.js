const ventasDAO = require('../models/ventasDAO')

const getAllVentas = (req, res) => {
    ventasDAO.getAllVentas(data => {
        try{
            if (!data) throw new Err("No se encontraron Ventas realizadas")
            res.send({
                status: true, data: data
            })
        }
        catch (Err){
            res.send({
                status: false, message: 'No se encontraron Ventas realizadas'
            })
        }
    })
}
const getVentaId = (req, res) => {
    ventasDAO.getByIdVenta(req.params.idVenta,data => {
        try{
            if(!data) throw new Error("No existe la Venta")
            res.send({
                status : true,
                body : data
            })
        }
        catch (Err){
            res.send({
                status: false,
                message: 'Venta no encontrado'
            })
        }
    })
}

const addVenta = (req, res) =>{
    const venta = {
        idProducto : req.body.idProducto,
        cantidad : req.body.cantidad,
        total : req.body.total,
        fecha: req.body.fecha,
        hora : req.body.hora,
        idUsuario : req.body.idUsuario
    }
    ventasDAO.insertVenta(venta, (data) =>{
        if(data && data.affectedRows === 1){
            res.send({
                status: true,
                message: 'Venta registrada correctamente'
            })
        } else {
            res.send({
                status: false,
                message: 'Ha ocurrido un error al guardar la venta'
            })
        }
    })
}

module.exports = {
    getAllVentas,
    getVentaId,
    addVenta,
}
