const  rolesDAO = require('../models/rolesDAO')

const getAllRoles = (req, res) => {
    rolesDAO.getAllRoles(data => {
        try{
            if (!data) throw new Err("No se encontraron Roles")
            res.send({
                status: true, data: data
            })
        }
        catch (Err){
            res.send({
                status: false, message: 'No se encontraron Roles'
            })
        }
    })
}
const getRolId = (req, res) => {
    rolesDAO.getByRolName(req.params.idRol,data => {
        try{
            if(!data) throw new Error("Rol no Encontrado")
            res.send({
                status : true,
                body : data
            })
        }
        catch (Err){
            res.send({
                status: false,
                message: 'Rol no encontrado'
            })
        }
    })
}

const addRol = (req, res) =>{
    const rol = {
        rol : req.body.rol,
        descripcion : req.body.descripcion
    }
    rolesDAO.insertRol(rol, (data) =>{
        if(data && data.affectedRows === 1){
            res.send({
                status: true,
                message: 'Rol creado correctamente'
            })
        } else {
            res.send({
                status: false,
                message: 'Ha ocurrido un error al crear el rol'
            })
        }
    })
}
const deleteRol = (req, res) => {
    rolesDAO.deleteRol(req.params.idRol, data => {
        try {
            if (!data) throw new Err("Hubo un error en el proceso")
            if (data.affectedRows === 0) throw new Err(`Falló la eliminación del idRol: ${req.params.idRol}`)
                res.send({
                    status: true,
                    message: `Eliminación de idRol: ${req.params.idRol} fue exitosa`
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
    getAllRoles,
    getRolId,
    addRol,
    deleteRol
}