require('dotenv').config();
const mysql = require('mysql2');
const cTable = require('console.table');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'employee_tracker_db'
});


function getAllDept() {
    con.connect(function(err) {
        if(err) throw err;
        console.log('Connected to Database!');
        const sql = `SELECT * FROM department`;
        con.query(sql, function (err, res) {
            if(err) throw err;
            console.table('\n', res);
        });
    });
};

function getAllRoles() {
    con.connect(function(err) {
        if(err) throw err;
        console.log('Connected to Database!');
        const sql = `SELECT r.id, r.title, r.salary, d.name AS dept
                    FROM role r
                    RIGHT JOIN department d
                    ON r.department_id = d.id`;
        con.query(sql, function (err, res) {
            if(err) throw err;
            console.table('\n', res);
        });
    });
};

function getAllEmployees() {
    con.connect(function(err) {
        if(err) throw err;
        console.log('Connected to Database!');
        const sql = `SELECT 
                        e.id,
                        CONCAT(e.first_name, ' ', e.last_name) AS name,
                        r.title, 
                        d.name AS dept,
                        r.salary,
                        e.manager_id AS Manager
                    FROM employee e
                    JOIN role r
                        ON e.role_id = r.id
                    JOIN department d
                        ON r.department_id = d.id`;
        con.query(sql, function (err, res) {
            if(err) throw err;
            console.table('\n', res);
        });
    });
};

function addDepartment(response) {
    const query = con.query(
        `INSERT INTO department SET ?`,
        {
            name: response['name'],
            id: this.lastID
        },
        function(err, res) {
            if (err) throw err;
            console.log(res);
        }
    );
    console.log(query.sql);
};

// function listDepartments() {
//     con.connect(function(err) {
//         if(err) throw err;
//         console.log('Connected to Database!');
//         const sql = `SELECT * d.name
//                     FROM department d`;
//         con.query(sql, function (err, res) {
//             if(err) throw err;
//             console.table('\n', res);
//         });
//     });
// };

function addRole(response) {
    switch (response['department']){
        case 'Sales':
            deptId = '1';
            break;
        case 'Finance':
            deptId = '2';
            break;
        case 'Legal':
            deptId = '3';
        case 'Engineering':
            break;
    }
    const query = con.query(
        `INSERT INTO role SET ?`,
        {
            title: response['title'],
            salary: response['salary'],
            department_id: deptId,
            id: this.lastID
        },
        function(err, res) {
            if(err) throw err;
            console.log(res);
            
        }
    );
};

function addEmployee(response) {
    switch (response['role']) {
        case 'Sales Lead':
            rodeId = 1;
            break;
        case 'Sales Associate':
            rodeId = 2;
            break;
        case 'Phone Operator':
            rodeId = 3;
            break;
        case 'Banker':
            rodeId = 4;
            break;
        case 'Accountant':
            rodeId = 5;
            break;
        case 'Loan Specialist':
            rodeId = 6;
            break;
        case 'Lawyer':
            rodeId = 7;
            break;
        case 'Legal Team Lead':
            rodeId = 8;
            break;
        case 'Paralegal':
            rodeId = 9;
            break;
        case 'Software Engineer':
            rodeId = 10;
            break;
        case 'Electrical Engineer':
            rodeId = 11;
            break;
        case 'Computer Vision Engineer':
            rodeId = 12;
            break;
        case 'Chemical Engineer':
            rodeId = 13;
    }

    const query = con.query(
        `INSERT INTO employee SET ?`,
        {
            first_name: response['first_name'],
            last_name: response['last_name'],
            role_id: rodeId,
            id: this.lastID
        },
        function(err, res) {
            if(err) throw err;
            console.log(res);
        }
    );
};


function endProgram() {
    con.end();
    console.log('Ended Connection');
};

module.exports = { getAllDept, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, endProgram };