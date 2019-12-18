const express=require('express');
const router= express.Router();
const homeController = require('../controllers/homeController');
const usuarioController= require('../controllers/usuarioController');
const registerController= require('../controllers/registerController');
const loginController= require('../controllers/loginController');
const authController= require('../controllers/authController');
const solicitudController= require('../controllers/solicitudController');



module.exports= function(){
    router.get('/',loginController.login);  
    router.post('/',authController.autenticarUsuario);  

    router.get('/register',registerController.register);
    router.post('/register',registerController.registerUser);


    router.get('/crearUsuario',usuarioController.formCrearUsuario);
    router.post('/crearUsuario',usuarioController.crearUser);

    router.get('/crearSolicitud',solicitudController.formCrearSolicitud);
    router.post('/crearSolicitud',solicitudController.crearSolicitud);
    router.post('/enviarSolicitud/',solicitudController.crearNuevaSolicitud);

    router.post('/register',registerController.registerUser);
    router.get('/home',homeController.home );
    router.get('/getProfile',authController.getUser );
    router.get('/getSolicitud',solicitudController.getListaSolicitud );

    return router;
}