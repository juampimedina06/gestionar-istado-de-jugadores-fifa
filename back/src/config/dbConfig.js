const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fifa_local', 'root', 'juampi123$J', {
    host: 'localhost', 
    port: 3306,
    dialect: 'mysql'
});

const initDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('¡Conexión establecida correctamente!'); 
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

module.exports = { sequelize, initDb };
