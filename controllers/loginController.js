exports.login = (req,res)=>{
    res.render('login');
}



exports.loginUser= async(req,res)=>{
    console.log('logeando usuario...');
        const operador = req.body;
        try {
            const nuevooperador= await Operador.create(operador);
            //TODO ::  FLASH MESSAGE Y REDIRECCIONAR
            console.log('Nuevo Operador', nuevooperador);     
            req.flash('exito', 'Bienvenido ');
            res.redirect('/home'); 
        } catch (error) {
            
            // extraer el message de los errores
            const erroresSequelize = error.errors.map(err => err.message);
           // console.log(erroresSequelize); 
    
            req.flash('error', erroresSequelize);
            res.redirect('/login');
        }
      
}