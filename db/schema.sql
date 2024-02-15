DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE  departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title  VARCHAR(30),
    salary DECIMAL(6,2),
    department VARCHAR(30),
    FOREIGN KEY (department) REFERENCES departments(id)
);
    
CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    title  VARCHAR(50),
    salary DECIMAL(6,2),
    department VARCHAR(30),
    manager VARCHAR(50),
    FOREIGN KEY (department) REFERENCES departments(id)
);
