const userDAO = require('../models/usersDAO')
const bcrypt = require('bcrypt')
const jwt = require('../utils/GenerateJWT')

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
    userDAO.findByUsername(user.userName, data => {
        if(data){
            if(bcrypt.compareSync(user.password,data.password )){
                res.send({
                    status: true,
                    message : 'Usuario y contraseña correcta',
                    nombre : data.nombre,
                    apellidoPaterno: data.apellidoPaterno,
                    token : jwt.generateToken(data)
                })
            }else{
                res.send({
                    status : false,
                    message : 'Contraseña incorrecta'
                })
            }
        } else {
            res.send({
                status: false,
                message : 'La cuenta de usuario no existe'
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