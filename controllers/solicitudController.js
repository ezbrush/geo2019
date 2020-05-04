
const Usuario = require('../models/usuario');
const Solicitud = require('../models/solicitud');
const Asignacion = require('../models/Asignacion');
const UbicaPerso = require('../models/ubicaPerso');

const Perso = require('../models/personal');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


exports.getCercanos = async (req,res)=>{
    const lat= req.body.lat;
    const lng= req.body.lng;
    //console.log(lat);
    //console.log(lng);
    const ubicacion = Sequelize.literal(`ST_GeomFromText( 'POINT( ${lat} ${lng} )' )`);
    console.log(ubicacion);
    // ST_DISTANCE_Sphere = Retorna una linea en metros
    const distancia = Sequelize.fn('ST_Distance_Sphere', Sequelize.col('ubicacion'), ubicacion);
    console.log(distancia);
    const cercanos = await UbicaPerso.findAll({
        order: distancia, // los ordena del mas cercano al lejano
        where : Sequelize.where(distancia, { [Op.lte] : 2000 } ), // 2 mil metros o 2km
        limit: 3, // maximo 3
        //offset: 1, 
        include: 
        [{model :  Perso,
            attributes: ['id','nombre','apellido','profesion'] },
        ]
    }) ;
    console.log(cercanos)
    try {
        res.json(cercanos)
    } catch (error) {
        res.json(error)
    }
}

exports.formCrearSolicitud = async (req,res)=>{
    const usuario = await Usuario.findOne({ where : {  id : req.params.usuarioId}});
    const solicitud = await Solicitud.findOne({ where : {  id : req.params.id, usuarioId: req.params.usuarioId}});
    
    const asigna={};
    asigna.idpersonal=usuario.id;
    asigna.idsolicitud=solicitud.id



    res.render('crearSolicitud',{
        usuario,solicitud
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

