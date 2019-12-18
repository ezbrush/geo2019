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
        
    },
    ubicacion : {
        type : Sequelize.GEOMETRY('POINT') 
    },
    estado: {
        type: Sequelize.STRING(60)
    },
    descripcion:{
        type:  Sequelize.STRING(60)
    }
   

},{
    
    hooks: {
   
    }

}
    

);

solicitud.belongsTo(usuario, {foreignKey: 'usuarioId'});

module.exports = solicitud;