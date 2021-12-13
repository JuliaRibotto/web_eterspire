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
    const {user,mail,type,report} = req.body;

    databaseConnection.query('INSERT INTO eterreport(user,mail,type,report)VALUES(?,?,?,?)',[user,mail,type,report],(error,data)=>{
            if(error){
                console.log(error)
            }else{
                res.redirect('/report');
            }
    })
};

module.exports = {
    renderHome,
    getReport,
    addReport
};
