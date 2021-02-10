const userDAO = require('../models/usersDAO')
const bcrypt = require('bcrypt')

const userNameValidate = (req, res) => {
    userDAO.findByUsername(req.params.username, data =>{
        try {
            if (!data) throw new Err("Usuario disponible")
            res.send({
                status: true, message: 'Usuario ocupado'
            })
        }
        catch(Err) {
            res.send({
                status: false, message: 'Usuario disponible'
            })
        }
    })
}
const getAllUsers = (req, res) => {
    userDAO.getAllUsers(data => {
        try{
            if (!data) throw new Err("No existen usuarios")
            res.send({
                status: true, body: data
            })
        }
        catch (Err){
            res.send({
                status: false, message: 'No existen usuarios'
            })
        }
    })
}
const signUp = (req, res) =>{
    const user = {
        idRol : req.body.idRol,
        nombre : req.body.nombre,
        apellidoPaterno : req.body.apellidoPaterno,
        userName : req.body.userName,
        password : bcrypt.hashSync(req.body.password,10),
    }
    userDAO.insertUser(user, (data) =>{
        if(data && data.affectedRows === 1){
            res.send({
                status: true,
                message: 'usuario creado exitosamente'
            })
        } else {
            res.send({
                status: false,
                message: 'Ha ocurrido un error al crear el usuario'
            })
        }
    })
}
const login = (req, res) =>{
    const user = {
        userName : req.body.userName,
        password : req.body.password,
    }
    userDAO.findByUsername(user.userName, data =>{
        const result = bcrypt.compareSync(user.password, data.password)
        console.log(result)
        if(result){
            res.send({
                status : true,
                message : "Contraseña valida",
                nombre : data.nombre,
                apellidoPaterno: data.apellidoPaterno
            })
        }else{
            res.send({
                status : false,
                message : "Contraseña no valida"
            })
        }
    })
}
module.exports = {
    userNameValidate,
    getAllUsers,
    signUp,
    login
}