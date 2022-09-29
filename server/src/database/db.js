import {Sequelize} from 'sequelize';
 
const db = new Sequelize('database_app','root','Niag0542',{
    host:'localhost',
    dialect: 'mysql'
});

export default db;