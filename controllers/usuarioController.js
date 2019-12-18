const Usuario = require('../models/usuario');
exports.formCrearUsuario = (req,res)=>{
    res.render('crearUsuario');
}

exports.crearUser= async(req,res)=>{
    console.log('registrando usuario...');
        const user = req.body;
        console.log(user);
        try {
            const nuevooperador= await Usuario.create(user);
            //TODO ::  FLASH MESSAGE Y REDIRECCIONAR
            console.log('Nuevo Usuario', nuevooperador);     
            req.flash('exito', 'Se acaba de registrar el usuario');
            res.redirect('/home'); 
        } catch (error) {
            
            // extraer el message de los errores
            const erroresSequelize = error.errors.map(err => err.message);
           // console.log(erroresSequelize); 
    
            req.flash('error', erroresSequelize);
            res.redirect('/crearUsuario');
        }
      
}