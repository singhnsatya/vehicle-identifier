var express = require('express');
var router = express.Router();
var vehicleControllers = require('../controllers');

router.get('/', vehicleControllers.home)
router.post('/upload', vehicleControllers.insertVehicle)
router.get('/alldates', vehicleControllers.getDates)
router.get('/date', vehicleControllers.getOnDates)

module.exports = router;