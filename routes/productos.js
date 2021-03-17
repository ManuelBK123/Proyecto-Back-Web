var express = require('express');
var router = express.Router();
const productosService = require('../controllers/productosService')

router.get('/getAllProductos',productosService.getAllProductos)
router.get('/getProductoId/:idProducto',productosService.getProductoId)
router.get('/getProductoNombre/:nombre',productosService.getProductoNombre)
router.post('/addProducto',productosService.addProducto)
router.delete('/deleteProducto/:idProducto', productosService.deleteProducto);

module.exports = router;