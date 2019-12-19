
const Solicitud = require('../models/solicitud');
const Usuario = require('../models/usuario');
exports.home = async (req,res)=>{

    list_sol= await Solicitud.findAll();
      console.log(list_sol);

    res.render('home',{list_sol});

}