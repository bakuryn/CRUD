const express = require('express')
const router = express.Router()
const CarController = require('../controllers/carController')

router.get('/add', CarController.newCar)
router.post('/add', CarController.newCarSave)
router.get('/allCars', CarController.allCars)
router.get('/', CarController.home)


module.exports = router