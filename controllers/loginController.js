const Usuario = require('../models/usuario');
exports.login = (req,res)=>{
    res.render('login');
}



exports.loginUser=  async (req,res)=>{
    console.log('login desde el api...');
    const email= req.body.email;    
    const password1= req.body.password;
    console.log(email);
    console.log(password1);
    try {
    const usua= await Usuario.findOne({ where: {email: email} });
    
    if(usua != null){
        const verificarPass =  usua.validarPassword(password1);
        console.log(verificarPass);

        if(verificarPass){
            usua.password = password1;
            res.json({
                ok: "true",
                contenido: usua
              });
        }else{
            res.json({
                ok: "false",
              });
        }

    }
     
     } catch (error) {
         res.json({
             ok: "Error",
             error: error
           });
    }
  /*  // si el password es incorrecto
    if(!verificarPass){
        res.json({
            ok: "false",
            error: error
          });

    }else{
        res.json({
            ok: "true",
            email: email,
            password: verificarPass
          });
    }*/

       
    
      
}
