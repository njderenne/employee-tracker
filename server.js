
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { allowedNodeEnvironmentFlags } = require('process');
const { getAllDept, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, endProgram } = require('./utils/queryFunctions');


const inputQuestion = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit']
    })
    .then (inputAnswer => {
        let answer = inputAnswer.choice.valueOf();
        switch (answer) {
            case 'View All Departments':
                console.log('View All Departments');
                getAllDept();
                inputQuestion();
                break;
            case 'View All Roles':
                console.log('View All Roles')
                getAllRoles();
                inputQuestion();
                break;
            case 'View All Employees':
                console.log('View All Employees');
                getAllEmployees();
                inputQuestion();
                break;
            case 'Add a Department':
                console.log('Add a Department');
                inquirer.prompt({
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the department you would like to add?'
                })
                .then(response => {
                    addDepartment(response);
                    inputQuestion();
                })
                break;
            case 'Add a Role':
                console.log('Add a Role');
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: 'What is the name of the new role?'
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'What is the salary of the new role?'
                    },
                    {
                        type: 'list',
                        name: 'department',
                        message: 'What department is the new role in?',
                        choices: ['Sales', 'Finance', 'Legal', 'Engineering']
                    }
                ])
                .then(response => {
                    addRole(response);
                    inputQuestion();
                })
                break;
            case 'Add an Employee':
                console.log('Add an Employee');
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'first_name',
                        message: 'What is the employees first name?'
                    },
                    {
                        type: 'input',
                        name: 'last_name',
                        message: 'What is the employees last name?'
                    },
                    {
                        type: 'list',
                        name: 'role',
                        message: 'What is the employees new role?',
                        choices: ['Sales Lead', 'Sales Associate', 'Phone Operator', 'Banker', 'Accountant', 'Loan Specialist', 'Lawyer', 'Legal Team Lead', 'Paralegal', 'Software Engineer', 'Electrical Engineer', 'Computer Vision Engineer', 'Chemical Engineer']
                    },
                    {
                        type: 'input',
                        name: 'manager',
                        message: 'Who is the new employees manager?'
                    }
                ])
                .then(response => {
                    addEmployee(response);
                    inputQuestion();
                })
                break;
            case 'Update an Employee Role':
                console.log('Update an Employee Role');
                inputQuestion();
                break;
            case 'Quit':
                console.log('Quit');
                endProgram();
                break;
        }
    });
};

inputQuestion();