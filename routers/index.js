const express=require('express');
const router= express.Router();
const homeController = require('../controllers/homeController');
const usuarioController= require('../controllers/usuarioController');
const registerController= require('../controllers/registerController');
const loginController= require('../controllers/loginController');
const authController= require('../controllers/authController');
const solicitudController= require('../controllers/solicitudController');
const especialdiadController= require('../controllers/especialidadCotroller');
const personalController= require('../controllers/personalController');
const ubicacionPersonalController= require('../controllers/ubicaPersoController');



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
    router.get('/crearEspecialidad',especialdiadController.home );
    router.post('/crearEspecialidad',especialdiadController.nuevoEspecialidad );
    router.get('/crearPersonal',personalController.home );
    router.post('/crearPersonal',personalController.nuevoPersonal );
    router.get('/crearUbicacionPersonal',ubicacionPersonalController.home );

    return router;
}