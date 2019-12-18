
const Usuario = require('../models/usuario');
const Solicitud = require('../models/solicitud');
exports.formCrearSolicitud = async (req,res)=>{
    const lista_usu= await Usuario.findAll();
    res.render('crearSolicitud',{
        lista_usu
    });
}

exports.crearSolicitud= async(req,res)=>{
    console.log('registrando solicitud...');
        const user = req.body;
        console.log(user);
        try {
            const nuevooperador= await Solicitud.create(user);
            //TODO ::  FLASH MESSAGE Y REDIRECCIONAR
            console.log('Nuevo Usuario', nuevooperador);     
            req.flash('exito', 'Se acaba de registrar la solicitud');
            res.redirect('/home'); 
        } catch (error) {
            
            // extraer el message de los errores
            const erroresSequelize = error.errors.map(err => err.message);
           // console.log(erroresSequelize); 
    
            req.flash('error', erroresSequelize);
            res.redirect('/crearSolicitud');
        }
      
}