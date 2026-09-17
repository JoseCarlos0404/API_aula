const express = require('express');
const chamadosController = require("../controller/chamadorController")

const router = express.Router();

router.post('/', chamadosController.criar);

module.exports = router;
