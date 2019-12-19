const Sequelize= require('sequelize');
const db= require('../config/db');

const especialidad=db.define('especialidad',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:Sequelize.STRING(60),
    descripcion:Sequelize.STRING(60)

});

module.exports = especialidad;