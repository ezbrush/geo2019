const Sequelize= require('sequelize');
const db= require('../config/db');
const bcrypt = require('bcrypt-nodejs');
const especialidad = require('../models/especialidad');


const personal=db.define('personal',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:Sequelize.STRING(60),
    apellido:Sequelize.STRING(60),
    email:{
        type: Sequelize.STRING(60),
        allowNull:false,
        validate:{
            isEmail:{msg:'Agrega un correo valido'}
        },
        unique:{
            args:true,
            msg: 'personal ya registrado'
        }

    },
    password:{
        type: Sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty:{
                msg:'El password no puede ser vacio'
            }
            
        },

    },

},{
    hooks: {
        beforeCreate(pe) { 
            pe.password = personal.prototype.hashPassword(pe.password);
        }
    }
});


// Método para comparar los password
personal.prototype.validarPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
personal.prototype.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null );
}

personal.belongsTo(especialidad, {foreignKey: 'idEsp'});


module.exports = personal;