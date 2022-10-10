const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('locadora1', 'root', '', {
    host:'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Database Started')
}
catch (error) {
    console.log('Database Not Connected!', error)
}

module.exports = sequelize