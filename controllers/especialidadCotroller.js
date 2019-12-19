
const Especialidad = require('../models/especialidad');
exports.home = (req,res)=>{
    res.render('crearEspecialidad');

}

exports.nuevoEspecialidad= async(req,res)=>{
    console.log('registrando especialidad...');
        const user = req.body;
        console.log(user);
        try {
            const nuevooperador= await Especialidad.create(user);
            //TODO ::  FLASH MESSAGE Y REDIRECCIONAR
            console.log('Nuevo Especialidad', nuevooperador);     
            req.flash('exito', 'Se acaba de registrar una nueva especialidad');
            res.redirect('/home'); 
        } catch (error) {
            
            // extraer el message de los errores
            const erroresSequelize = error.errors.map(err => err.message);
           // console.log(erroresSequelize); 
    
            req.flash('error', erroresSequelize);
            res.redirect('/crearEspecialidad');
        }
      
}