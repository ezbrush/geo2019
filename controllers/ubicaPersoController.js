
const Personal = require('../models/personal');
const Ubica =  require('../models/ubicaPerso');
exports.home = async (req,res)=>{
    const lista= await Personal.findAll();
    res.render('crearUbicacionPersonal',{lista});

}