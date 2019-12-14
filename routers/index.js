const express=require('express');
const router= express.Router();
const homeController = require('../controllers/homeController');
const usuarioController= require('../controllers/usuarioController');
const registerController= require('../controllers/registerController');
const loginController= require('../controllers/loginController');
const authController= require('../controllers/authController');


module.exports= function(){
    router.get('/',loginController.login);  
    router.post('/',authController.autenticarUsuario);  

    router.get('/register',registerController.register);
    router.post('/register',registerController.registerUser);


    router.get('/crear-cuenta',usuarioController.formCrearCuenta);
    router.get('/home',homeController.home );
    return router;
}