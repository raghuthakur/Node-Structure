require('./environment');
const config = require('./config').config;
const mysql = require('mysql');
const QueryBuilder = require('node-querybuilder');

var con = mysql.createConnection({
    host: config[environment].MYSQL_HOST,
    user: config[environment].MYSQL_USER,
    password: config[environment].MYSQL_PASSWORD,
    database: config[environment].MYSQL_DATABASE,
    charset: 'utf8mb4',
    dbcollat: 'utf8mb4_unicode_ci'

});

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Database connect successfully.");
});


//Query Builder Connection
const settings = {
    host: config[environment].MYSQL_HOST,
    user: config[environment].MYSQL_USER,
    password: config[environment].MYSQL_PASSWORD,
    database: config[environment].MYSQL_DATABASE,
    charset: 'utf8mb4',
    dbcollat: 'utf8mb4_unicode_ci'
};

const db = new QueryBuilder(settings, 'mysql', 'single');

// Return Connection status


module.exports = {
    db,
    con
}