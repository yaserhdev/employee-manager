// Required dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

// Connection credentials
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_db',
});

// Connection to database
connection.connect(function(err) {
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
});

// Function for starting prompt
function startPrompt() {
    inquirer.prompt({
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
    .then (function({task}) {
        switch(task) {
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
            updateRole();
            break;
          case 'Quit':
            connection.end();
            break;
        };
      });
};

function viewDepartments() {
  var query = 
  `SELECT * 
   FROM departments`;
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

function viewRoles() {
  var query = 
  `SELECT * 
   FROM roles`;
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

function viewEmployees() {
  var query = 
  `SELECT * 
   FROM employees`;
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

function addDepartment() {
  inquirer.prompt({
    type: 'input',
    name: 'department',
    message: 'What is the name of the new department?'
})
  .then(function({department}) {
    connection.query(`INSERT INTO departments (name) VALUES ('${department}')`, function(err, res)  {
      if (err) throw err;
      console.log('New department added!');
      startPrompt();
    });
  });
};

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this role?',
    },
    {
      type: 'number',
      name: 'salary',
      message: 'What is the salary for this role?'
    },
    {
      type: 'input',
      name: 'department',
      message: 'Which department does this role belong to?'
    }
  ])
  .then(function({name, salary, department}) {
    connection.query(`INSERT INTO roles (name, salary, department) VALUES ('${name}', '${salary}', '${department}')`, function(err, res)  {
      if (err) throw err;
      console.log('New role added!');
      startPrompt();
    });
  });
}

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the employees first name?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employees last name?'
    },
    {
      type: 'input',
      name: 'role',
      message: 'What role will be assigned to this employee?'
    },
    {
      type: 'input',
      name: 'manager',
      message: 'Who is the manager for this employee?'
    }
  ])
  .then(function({first_name, last_name, role, manager}) {
    connection.query(`INSERT INTO employees (first_name, last_name, role, manager) VALUES ('${first_name}', '${last_name}', '${role}', '${manager}')`, function(err, res)  {
      if (err) throw err;
      console.log('New employee added!');
      startPrompt();
    });
  });
}

function updateRole() {

}

