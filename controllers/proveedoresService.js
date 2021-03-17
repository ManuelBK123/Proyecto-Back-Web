const proveedoresDAO =require('../models/proveedoresDAO')

const getAllProveedores = (req, res) => {
    proveedoresDAO.getAllProveedores(data => {
        try{
            if (!data) throw new Err("No se encontraron Proveedores")
            res.send({
                status: true, data: data
            })
        }
        catch (Err){
            res.send({
                status: false, message: 'No se encontraron Proveedores'
            })
        }
    })
}
const getProveedorId = (req, res) => {
    proveedoresDAO.getByIdProveedor(req.params.idProveedor,data => {
        try{
            if(!data) throw new Error("No existe el proveedor")
            res.send({
                status : true,
                body : data
            })
        }
        catch (Err){
            res.send({
                status: false,
                message: 'Proveedor no encontrado'
            })
        }
    })
}

const addProveedor = (req, res) =>{
    const proveedor = {
        nombre : req.body.nombre,
        ciudad : req.body.ciudad,
        pais : req.body.pais,
        codigoPostal: req.body.codigoPostal,
        telefono : req.body.telefono
    }
    proveedoresDAO.insertProveedor(proveedor, (data) =>{
        if(data && data.affectedRows === 1){
            res.send({
                status: true,
                message: 'Proveedor creado correctamente'
            })
        } else {
            res.send({
                status: false,
                message: 'Ha ocurrido un error al crear el Proveedor'
            })
        }
    })
}

const deleteProveedor = (req, res) => {
    proveedoresDAO.deleteProveedor(req.params.idProveedor, data => {
        try {
            if (!data) throw new Err("Hubo un error en el proceso")
            if (data.affectedRows === 0) throw new Err(`Falló la eliminación del idRol: ${req.params.idProveedor}`)
            res.send({
                status: true,
                message: `Eliminación de idRol: ${req.params.idProveedor} fue exitosa`
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'Ocurrio un problema al tratar de eliminar el rol'
            })
        }
    })
}

module.exports = {
    getAllProveedores,
    getProveedorId,
    addProveedor,
    deleteProveedor
}