const passport = require('passport');

exports.autenticarUsuario = passport.authenticate('local', {
    successRedirect : '/home',
    failureRedirect: '/', 
    failureFlash : true,
    badRequestMessage : 'Ambos campos son obligatorios'
});

// revisa si el usuario esta autenticado o no
exports.usuarioAutenticado = (req, res, next) => {
    // si el usuario esta autenticado, adelante
    if(req.isAuthenticated() ) {
        return next();
    }

    // sino esta autenticado
    return res.redirect('/');
}

// Cerrar sesión
exports.cerrarSesion = (req, res, next) => {
    req.logout();
    req.flash('correcto', 'Cerraste sesión correctamente');
    res.redirect('/');
    next();
}

exports.getUser = (req, res, next) =>{

    //here it is
    var user = req.user;

    //you probably also want to pass this to your view
    res.json({
        ok: true,
        body : user,
        
      });
          
}