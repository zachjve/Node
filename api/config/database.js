const mysql = require('mysql2')

//___________BD____CONNECTION_____________________________________
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'admin',
    password : 'admin',
    database : 'users',
    port     : '3306'
})//_________________________________________END___DB___CONNECTION

if (connection) { //________________VERIF______CONNECTION_________
    console.log('DB connected!')
}//_______________________________________________________________

module.exports = connection