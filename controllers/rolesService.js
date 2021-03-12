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

module.exports = {
    getAllRoles,
    getRolId,
    addRol,
}