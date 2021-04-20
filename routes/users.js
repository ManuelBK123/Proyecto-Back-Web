var express = require('express');
var router = express.Router();
const userServices = require('../controllers/userService')
const jwt = require('jsonwebtoken')
const configuration = require('../configServer')

//Zona de Middleware
router.use('/',(req, res, next) => {
  //paso 1
  const token = req.header['authorization']
  if(!token){
    next()
    req.user = null
    return
  }
  jwt.verify(token,configuration.jwt.secret, (err, user) => {
    if (err)
      req.user=null
    else
      req.user=user
    next()
  })
})

//Zona de routers
router.get('/usernameValidate/:username',userServices.userNameValidate)
router.get('/getAllUsers', userServices.getAllUsers)
router.post('/signUp',userServices.signUp)
router.post('/login',userServices.login)
router.delete('/deleteUser/:idUser', userServices.deleteUser);

module.exports = router;
