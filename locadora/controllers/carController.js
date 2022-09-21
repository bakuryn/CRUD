const Car = require('../model/Car')


module.exports = class CarController {

    static newCar (req, res)  {    
        res.render('cars/carform')
    }

    static async newCarSave(req, res) {
        const carro = {
            nome: req.body.name,
            modelo: req.body.model,
            motor: req.body.motor,
            ano: req.body.year,
            fabricante: req.body.producer,
            valor: req.body.price,
            cor: req.body.color,
            opcional: req.body.optional,
        }

        await Car.create(carro)
        .then(() => {
            this.allCars()
        }).catch((error) => {
            console.log(error)
        })
        res.redirect('/cars/allCars')
    
    }

    static async home(req, res) {
        res.render('cars/home')
    }

    static async allCars(req, res) {
        const cars = await Car.findAll({ raw: true })
        res.render('cars/viewcar',{ cars })
    }

}