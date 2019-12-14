const Sequelize= require('sequelize');
const db= require('../config/db');
const usuario = require('../models/usuario');

const solicitud = db.define('solicitud',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    
    fecha : {
        type : Sequelize.DATEONLY, 
        allowNull : false,
        validate : {
            notEmpty : {
                msg : 'Agrega una fecha'
            }
        }
    },
    ubicacion : {
        type : Sequelize.GEOMETRY('POINT') 
    },
   

},{
    
    hooks: {
   
    }

}
    

);

solicitud.belongsTo(usuario, {foreignKey: 'usuarioId'});

module.exports = solicitud;