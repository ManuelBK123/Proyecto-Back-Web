var express = require('express');
var router = express.Router();
const ventasService = require('../controllers/ventasService')

router.get('/getAllVentas',ventasService.getAllVentas)
router.get('/getVentaId/:idVenta',ventasService.getVentaId)
router.get('/addVenta',ventasService.addVenta)

module.exports = router;