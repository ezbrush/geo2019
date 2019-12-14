const Sequelize= require('sequelize');
module.exports=new Sequelize('d32nsl5s4do0c6','fnztdhbeotmjue','a8742d8857bf4fcdc4ffe0ad3d92919273dfb140530bc0ae62f7a3abc57a6620',{// database, user . password
    host:'ec2-107-21-93-51.compute-1.amazonaws.com',
    port:'5432',
    dialect: 'postgres' ,
    dialectOptions: {
      ssl: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      logging:false,
});