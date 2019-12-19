const Sequelize= require('sequelize');
const db= require('../config/db');

const personal = require('../models/personal');
const usuario = require('../models/usuario');



const asig = db.define('asignacion',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    estado: Sequelize.STRING(60)
}
    

);

asig.belongsTo(personal, {foreignKey: 'idpersonal'});
asig.belongsTo(usuario, {foreignKey: 'idusuario'});


module.exports = asig;