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
            opcionais: req.body.optional,
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

    static async updateCar(req, res) {
        const id = req.params.id
        const car = await Car.findOne({ where: { id: id }, raw: true })
        res.render('cars/edit', { car })
    
      }
    
      static async updateCarSave(req, res) {
        const id = req.body.id
        const car = {
            nome: req.body.nome,
            modelo: req.body.modelo,
            motor: req.body.motor,
            ano: req.body.ano,
            fabricante: req.body.fabricante,
            valor: req.body.valor,
            cor: req.body.cor,
            opcionais: req.body.opcionais,
        }
        await Car.update(car, { where: { id: id } })
          .then(res.redirect('/cars/allCars'))
          .catch((err) => {
            console.log(err)
          })
      }
    
      static async removeCar(req, res) {
        const id = req.body.id
        await Car.destroy({ where: { id: id } })
          .then(res.redirect('/cars/allCars'))
          .catch((err) => {
            console.log(err)
          })
      }

}

