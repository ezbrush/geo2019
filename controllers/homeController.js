
const Solicitud = require('../models/solicitud');
exports.home = async (req,res)=>{

    list_sol= await Solicitud.findAll();

    res.render('home',{list_sol});

}