const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Car = db.define('Car', {
    nome: {
        type: DataTypes.STRING,
        require: true
    },
    modelo: {
        type: DataTypes.STRING,
        require: true
    },
    motor: {
        type: DataTypes.STRING,
        require: true
    },
    ano: {
        type: DataTypes.INTEGER,
        require: true
    },
    fabricante: {
        type: DataTypes.STRING,
        require: true
    },
    valor: {
        type: DataTypes.DECIMAL(10,2),
        require: true
    },
    cor: {
        type: DataTypes.STRING,
        require: true
    },
    opcionais: {
        type: DataTypes.STRING,
        require: true
    },

})

module.exports = Car