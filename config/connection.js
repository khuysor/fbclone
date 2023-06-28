const mysql=require('mysql')
const db=mysql.createConnection({
    host : process.env.db_host,
    user : process.env.db_user,
    password : process.env.db_pass,
    database : process.env.database

})
module.exports=db;