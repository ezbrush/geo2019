const Sequelize= require('sequelize');
const db= require('../config/db');

const personal = require('../models/personal');


const ubica = db.define('solicitud',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    ubicacion : {
        type : Sequelize.GEOMETRY('POINT') 
    },
   
}
    

);

ubica.belongsTo(personal, {foreignKey: 'idpersonal'});

module.exports = ubica;