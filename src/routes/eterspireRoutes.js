const express = require('express');
const { render } = require("ejs");

const routes = express.Router();

const {
    renderHome,
    getReport,
    addReport

} = require('../controllers/eterspireControllers')

routes.get("/",renderHome);

routes.get("/report",getReport);

routes.post("/report",addReport);

module.exports = routes;