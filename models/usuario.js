const Sequelize= require('sequelize');
const db= require('../config/db');
const bcrypt = require('bcrypt-nodejs');

const usuario = db.define('usuario',{
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
    Telefono:Sequelize.INTEGER,
    fecha : {
        type : Sequelize.DATEONLY, 
        allowNull : false,
        validate : {
            notEmpty : {
                msg : 'Agrega una fecha'
            }
        }
    },
   

},{
    
    hooks: {
    beforeCreate(usu) { 
        usu.password = usuario.prototype.hashPassword(usu.password);
        }
    }

}
    

);

// Método para comparar los password
usuario.prototype.validarPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
usuario.prototype.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null );
}
module.exports = usuario;