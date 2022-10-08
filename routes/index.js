var express = require('express');
var router = express.Router();

/* GET home page. */
const productosController = require("../controllers/productosController")

router.get('/', productosController.getInHome);

module.exports = router;
