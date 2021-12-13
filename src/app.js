const express = require('express');
const app = express();
const routes = require("./routes/eterspireRoutes");
const path = require('path');
const databaseConnection = require('../config/database');
const port = process.env.PORT || 3000;

databaseConnection.connect();

app.use(express.json());
app.use(express.urlencoded ({extended:false}));

app.use("",routes);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

//------------------------------
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});