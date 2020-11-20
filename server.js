
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { getAllDept, getAllRoles, getAllEmployees, endProgram } = require('./utils/queryFunctions');


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
                inputQuestion();
                break;
            case 'Add a Role':
                console.log('Add a Role');
                inputQuestion();
                break;
            case 'Add an Employee':
                console.log('Add an Employee');
                inputQuestion();
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