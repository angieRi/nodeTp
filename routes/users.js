var express = require('express');
var router = express.Router();

/* GET users listing. */
const usuariosController = require("../controllers/usuariosController")

router.post('/login', usuariosController.login);
router.post('/', usuariosController.create);
module.exports = router;

module.exports = router;
