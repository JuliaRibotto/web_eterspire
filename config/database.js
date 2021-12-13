const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host: 'btaxfsdkx2gkgtiti3ul-mysql.services.clever-cloud.com',
    user: 'upbwnaevld75m24q',
    database: 'btaxfsdkx2gkgtiti3ul',
    password:'SnvrJLdv45J65qyvSKDv',
    port:'3306',
});

databaseConnection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to DB");
    };
});

module.exports = databaseConnection;