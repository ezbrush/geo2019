

const Personal = require('../models/personal');
exports.home =async (req,res)=>{
    res.render('crearPersonal');

}

exports.getListaPersonal= async (req,res)=>{
    const lista_soli= await Personal.findAll();
    try {
        res.json(lista_soli)
    } catch (error) {
        res.json(error)
    }

}

exports.nuevoPersonal=  async(req,res)=>{
    console.log('registrando Personal...');
        const user = req.body;
        console.log(user);
        try {
            const nuevooperador= await Personal.create(user);
            //TODO ::  FLASH MESSAGE Y REDIRECCIONAR
            console.log('Nuevo Personal', nuevooperador);     
            req.flash('exito', 'Se acaba de registrar el Perosnal');
            res.redirect('/home'); 
        } catch (error) {
            
            // extraer el message de los errores
            const erroresSequelize = error.errors.map(err => err.message);
           // console.log(erroresSequelize); 
    
            req.flash('error', erroresSequelize);
            res.redirect('/crearPersonal');
        }
      
}