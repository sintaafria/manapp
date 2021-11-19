var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mandb',
    port: '3306'
});

conn.connect((err)=>{
    if(err){throw new Error(err)} 
    console.log('Mysql terkoneksi');
});

module.exports = conn;