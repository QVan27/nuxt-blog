const mysql = require('mysql');

let connection;

connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'blog3bci',
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(error => {
    if (error) throw error;
    console.log('Bien connecte à la BDD ');
})

module.exports = connection;