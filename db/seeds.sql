INSERT INTO departments (name)
VALUES ("Property Management"),
       ("Real Estate"),
       ("Finance"),
       ("Marketing");

INSERT INTO roles (title, salary, department_id) 
VALUES ("Broker", 100000.00, 2), 
       ("Senior Property Manager", 75000.00, 1),
       ("Sales Leader", 60000.00, 2),
       ("Marketing Leader", 40000.00, 4),
       ("Admin", 40000.00, 1),
       ("Finance Director", 60000.00, 3),
       ("Junior Property Manager", 50000.00, 1),
       ("Realtor", 45000.00, 2);

INSERT INTO employees (first_name, last_name, role_id) 
VALUES ("Betty", "Best", 1),
       ("Jake", "Grodt", 2),
	("Hsin-Hsin", "Lin", 3),
       ("Bernadette", "Bernadino", 4),
       ("Brenda", "Chavez", 5),
       ("Sarah", "Meaden", 6),
       ("Yaser", "Hussain", 7),
       ("Allison", "Baker", 8),
       ("Cindy", "Nocente", 8);

UPDATE employees SET manager_id = 1 WHERE id IN (2, 3, 4, 5, 6);
UPDATE employees SET manager_id = 2 WHERE id IN (7);
UPDATE employees SET manager_id = 3 WHERE id IN (8, 9);