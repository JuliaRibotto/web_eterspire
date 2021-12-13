const databaseConnection = require("../../config/database");

const renderHome = (req,res)=>{
    databaseConnection.query('SELECT * FROM eterarticles',(error,data)=>{
        if (error) {
            console.log(error);
        } else {
            res.render("pages/index",{data});
        };
    });
};

const getReport = (req,res) => {
    res.render("pages/form");
};

const addReport = (req,res) => {
    res.send("Recibido!");
    const {user,mail,type,report} = req.body;
    console.log(user);
};

module.exports = {
    renderHome,
    getReport,
    addReport
};
