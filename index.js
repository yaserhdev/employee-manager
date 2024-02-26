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
    .then(function ({ task }) {
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
          updateRole();
          break;
        case 'Quit':
          connection.end();
          break;
      };
    });
};

// Function to view all departments
function viewDepartments() {
  var query =
    `SELECT * 
     FROM departments`;
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

// Function to view all roles
function viewRoles() {
  var query =
    `SELECT roles.id, roles.title, roles.salary, departments.name AS department
     FROM roles LEFT JOIN departments ON roles.department_id = departments.id`;
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

// Function to view all employees
function viewEmployees() {
  var query =
    `SELECT employees.first_name, employees.last_name, roles.name, roles.salary, CONCAT(managers.first_name, ' ', managers.last_name) manager
     FROM employees LEFT JOIN roles ON employees.role_id = roles.id 
     LEFT JOIN employees managers ON employees.manager_id = managers.id`;
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

// Function to add a new department
function addDepartment() {
  inquirer.prompt({
    type: 'input',
    name: 'department',
    message: 'What is the name of the new department?'
  })
    .then(function ({ department }) {
      connection.query(`INSERT INTO departments (name) VALUES ('${department}')`, function (err, res) {
        if (err) throw err;
        console.log('New department added!');
        startPrompt();
      });
    });
};

// Function to add a new role
function addRole() {
  connection.query(`SELECT id value, name FROM departments`, function (err, data) {

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
        type: 'list',
        name: 'department',
        message: 'Which department does this role belong to?',
        choices: data
      }
    ])
      .then(function ({ name, salary, department }) {
        connection.query(`INSERT INTO roles (name, salary, department_id) VALUES ('${name}', '${salary}', '${department}')`, function (err, res) {
          if (err) throw err;
          console.log('New role added!');
          startPrompt();
        });
      });
  })
}

// Function to add a new employee
function addEmployee() {
  connection.query(`SELECT id value, name FROM roles`, function (err, roleData) {
    connection.query(`SELECT id value, CONCAT(first_name, ' ', last_name) name FROM employees WHERE id IN(1, 2, 3)`, function (err, managerData) {
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
          type: 'list',
          name: 'role',
          message: 'What role will be assigned to this employee?',
          choices: roleData
        },
        {
          type: 'list',
          name: 'manager',
          message: 'Who is the manager for this employee?',
          choices: managerData
        }
      ])
        .then(function ({ first_name, last_name, role, manager }) {
          connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', '${role}', '${manager}')`, function (err, res) {
            if (err) throw err;
            console.log('New employee added!');
            startPrompt();
          });
        });
    })
  })
}

// Function to update an existing employees role
function updateRole() {
  connection.query(`SELECT id value, CONCAT(first_name, ' ', last_name) name FROM employees`, function (err, employees) {
    connection.query(`SELECT id value, name FROM roles`, function (err, roles) {
      inquirer.prompt([
        {
          type: 'list',
          name: 'find_employee',
          message: 'Which employees role would you like to update?',
          choices: employees
        },
        {
          type: 'list',
          name: 'find_role',
          message: 'Which role would you like to give this employee?',
          choices: roles
        }
      ])
        .then(res => {
          connection.query(`UPDATE employees SET role_id = ${res.find_role} WHERE id = ${res.find_employee}`, function (err, data) {
            if (err) throw err;
            viewEmployees();
          })
        })
    })
  })
}