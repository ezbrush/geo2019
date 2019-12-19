
const Usuario = require('../models/usuario');
const Solicitud = require('../models/solicitud');
const Asignacion = require('../models/Asignacion');

exports.formCrearSolicitud = async (req,res)=>{
    const usuario = await Usuario.findOne({ where : {  id : req.params.usuarioId}});
    const grupo = await Solicitud.findOne({ where : {  id : req.params.id, usuarioId: req.params.usuarioId}});
    console.log(grupo.descripcion);
    console.log('========');
    console.log(usuario.nombre);
    console.log('========');
    const asigna={};
    asigna.idpersonal=usuario.id;
    asigna.idsolicitud=grupo.id
    res.render('crearSolicitud',{
        usuario,grupo
     });
}


exports.getListaSolicitud= async (req,res)=>{
    const lista_soli= await Solicitud.findAll();
    try {
        res.json(lista_soli)
    } catch (error) {
        res.json(error)
    }

}

exports.asignarSolicitud=async(req, res, next)=>{
  
    res.redirect('crearSolicitud');

}



exports.crearNuevaSolicitud= async (req,res)=>{
    console.log('registrando solicitud desde el api...');
    const solicitud = req.body;

    solicitud.usuarioId= req.body.id_user;
    const point = { type: 'Point',coordinates: [parseFloat(req.body.lat),parseFloat(req.body.lng)]};
    solicitud.ubicacion= point;
    solicitud.fecha= "2019-12-13";
       try {
       await Solicitud.create(solicitud);
       res.json({
        ok: "true",
      });
       } catch (error) {
        res.json({
            ok: "false",
            error: error
          });
       }
  
      
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