const mysql = require('mysql2');


const databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'eterspireweb',
});

databaseConnection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to DB");
    };
});

module.exports = databaseConnection;