var express = require('express');
var router = express.Router();
const userServices = require('../controllers/userService')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/usernameValidate/:username',userServices.userNameValidate)
router.get('/getAllUsers', userServices.getAllUsers)
router.post('/signUp',userServices.signUp)
router.post('/login',userServices.login)

module.exports = router;
