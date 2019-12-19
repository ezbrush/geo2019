
const Personal = require('../models/personal');
const Ubica =  require('../models/ubicaPerso');
exports.home = async (req,res)=>{
    const lista= await Personal.findAll();
    res.render('crearUbicacionPersonal',{lista});

}

exports.getListaSolicitud= async (req,res)=>{
    const lista_soli= await Ubica.findAll();
    try {
        res.json(lista_soli)
    } catch (error) {
        res.json(error)
    }

}


exports.crearNuevaUbicacion= async (req,res)=>{
    console.log('registrando Ubicacion desde el movil...');
    const solicitud = req.body;

    solicitud.idpersonal= req.body.id_personal;
    const point = { type: 'Point',coordinates: [parseFloat(req.body.lat),parseFloat(req.body.lng)]};
    solicitud.ubicacion= point;
       try {
       await Ubica.create(solicitud);
       res.json({
        ok: true,
      });
       } catch (error) {
        res.json({
            ok: false,
            error: error
          });
       }
  
      
}