const express= require('express');
const path= require('path');
const expressLayout= require('express-ejs-layouts');
const bodyParser= require('body-parser');
const flash= require('connect-flash');
const session= require('express-session');
const cookieParser= require('cookie-parser');
const passport = require('./config/passport');


//Configuracion y modelos de DB
const db= require('./config/db');
require('./models/operador');
require('./models/usuario');
require('./models/solicitud');
db.sync().then( ()=> console.log('DB Conectada')).catch((error)=>console.log(error));

const router= require('./routers');
require('dotenv').config({path: 'variables.env'});

//Aplicacion principal
const app = express();




const publicPath = path.resolve(__dirname, './public');
app.set('views', path.join(__dirname, './public'));
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;


// app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // support encoded bodies


// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




//Habilitar EJS como template engine
app.use(expressLayout);
app.set('view engine','ejs');

//Archivos staticos
app.use(express.static(publicPath));

// Ubicaciones - Vistas
app.set('views',path.join(__dirname,'./views'));


// habilitar cookie parser
app.use(cookieParser());

// crear la session
app.use(session({
    secret: 'palabrasecreta',
    key: 'supersecreta',
    resave : false,
    saveUninitialized : false
}))

// inicializar passport
app.use(passport.initialize());
app.use(passport.session());


// Agrega flash messages
app.use(flash());


//Middleware usuario logeado, fecha ,flash message
app.use((req,res,next)=>{
    
    res.locals.mensajes = req.flash();
    const fecha = new Date();
    res.locals.year=fecha.getFullYear();
    next();


});

//Routing
app.use('/',router() );



//Agrega el puerto
app.listen(port,()=>{
    console.log('el servidor esta funcionando');
});