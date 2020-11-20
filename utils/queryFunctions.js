const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_tracker_db'
});


function getAllDept() {
    con.connect(function(err) {
        if(err) throw err;
        console.log('Connected to Database!');
        const sql = `SELECT * FROM department`;
        con.query(sql, function (err, res) {
            if(err) throw err;
            console.log(res);
        });
    });
};

function getAllRoles() {
    con.connect(function(err) {
        if(err) throw err;
        console.log('Connected to Database!');
        const sql = `SELECT * FROM role`;
        con.query(sql, function (err, res) {
            if(err) throw err;
            console.log(res);
        });
    });
};

function getAllEmployees() {
    con.connect(function(err) {
        if(err) throw err;
        console.log('Connected to Database!');
        const sql = `SELECT * FROM employee`;
        con.query(sql, function (err, res) {
            if(err) throw err;
            console.log(res);
        });
    });
};

function endProgram() {
    con.end();
    console.log('Ended Connection');
};

module.exports = { getAllDept, getAllRoles, getAllEmployees, endProgram };