const mysql = require("mysql2")

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'EasyMed',
    password: 'root'
})

module.exports = con

