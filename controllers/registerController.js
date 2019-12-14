const Operador = require('../models/operador');
exports.register = (req,res)=>{
    res.render('register');
}

exports.registerUser= async(req,res)=>{
    console.log('registrando usuario...');
        const operador = req.body;
        try {
            const nuevooperador= await Operador.create(operador);
            //TODO ::  FLASH MESSAGE Y REDIRECCIONAR
            console.log('Nuevo Operador', nuevooperador);     
            req.flash('exito', 'Hemos enviado un E-mail, confirma tu cuenta');
            res.redirect('/home'); 
        } catch (error) {
            
            // extraer el message de los errores
            const erroresSequelize = error.errors.map(err => err.message);
           // console.log(erroresSequelize); 
    
            req.flash('error', erroresSequelize);
            res.redirect('/register');
        }
      
}