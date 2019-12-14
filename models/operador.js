const Sequelize= require('sequelize');
const db= require('../config/db');
const bcrypt = require('bcrypt-nodejs');
const operador=db.define('operador',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    apellido:Sequelize.STRING(60),
    nombre:Sequelize.STRING(60),
    email:{
        type: Sequelize.STRING(60),
        allowNull:false,
        validate:{
            isEmail:{msg:'Agrega un correo valido'}
        },
        unique:{
            args:true,
            msg: 'Operador ya registrado'
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

}, {
    hooks: {
        beforeCreate(ope) { 
            ope.password = operador.prototype.hashPassword(ope.password);
        }
    }
});

// Método para comparar los password
operador.prototype.validarPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
operador.prototype.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null );
}
module.exports = operador;