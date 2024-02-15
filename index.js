const mysql = require('mysql2');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'Alg,0256',
    database: 'employee_db',
});

// Connection to database
connection.connect(function (err) {
    if (err) {
        console.log('Error connecting!');
        return;
    }
    console.log(`
        _______                  __                               _______                                     
       |    ___|.--------.-----.|  |.-----.--.--.-----.-----.    |   |   |.---.-.-----.---.-.-----.-----.----.
       |    ___||        |  _  ||  ||  _  |  |  |  -__|  -__|    |       ||  _  |     |  _  |  _  |  -__|   _|
       |_______||__|__|__|   __||__||_____|___  |_____|_____|    |__|_|__||___._|__|__|___._|___  |_____|__|  
                         |__|             |_____|                                           |_____|             
    `);
    startPrompt();
})

// Function for starting prompt
function startPrompt() {
    inquirer.prompt ({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit',
        ]
    })
    .then (function ({task}) {
        switch (task) {
          case 'View all departments':
            viewDepartments();
            break;
          case 'View all roles':
            viewRoles();
            break;
          case 'View all employees':
            viewEmployees();
            break;
          case 'Add a department':
            addDepartment();
            break;
          case 'Add a role':
            addRole();
            break;
          case 'Add an employee':
            addEmployee();
            break;
          case 'Update an employee role':
            break;
          case 'End':
            connection.end();
            break;
        }
      });
}