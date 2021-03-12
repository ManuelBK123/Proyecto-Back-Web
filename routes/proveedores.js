var express = require('express');
var router = express.Router();
const proveedoresService = require('../controllers/proveedoresService')

router.get('/getProveedorId/:idProveedor',proveedoresService.getProveedorId)
router.get('/getAllProveedores', proveedoresService.getAllProveedores)
router.post('/addProveedor', proveedoresService.addProveedor)
module.exports = router;