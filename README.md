# employee-manager
Week 12 Challenge

In this challenge, I was given the task of creating CLI application which serves as a database to manage employees within an organization. The application contains the following features:

- database which holds records of departments, roles, and employees

    1. Departments contains department names
    2. Roles contains role names, salaries, and departments
    3. Employees contains an employees first name, last name, role, department, salary, and manager

- view all data in table format

- add departments, roles, or employees to the database

- update an employees current cole

- contains an easy to navigate list:

    1. View all departments
    2. View all roles
    3. View all employees
    4. Add a department
    5. Add a role
    6. Add an employee
    7. Update an employee role
    8. Quit


## Installation
To install this application you will need Node.js and MySQL installed on your computer. Once installed download the files from the repository and navigate to /employee-manager in your terminal. Use the following commands to install the required dependencies:
```
npm install inquirer@8.2.4
npm i
```
Once dependencies have been installed you will need to set up and seed the database. To do so navigate to /employee-manager/db in your terminal, start MySQL, and use the following commands:
```
SOURCE schema.sql;
SOURCE seeds.sql;
quit;
```
Once the database has been set up and seeded, navigate back to /employee-manager in your terminal and use the following command to start the application:
```
node index.js
```


## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```


Application available for download at: https://github.com/yaserhdev/employee-manager

Demo video of application available at: 