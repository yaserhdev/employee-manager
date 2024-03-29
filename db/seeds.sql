INSERT INTO departments (name)
VALUES ("Property Management"), -- id = 1
       ("Real Estate"), -- id = 2
       ("Finance"), -- id = 3
       ("Marketing"); -- id = 4

INSERT INTO roles (name, salary, department_id) 
VALUES ("Broker", 100000.00, 2), -- id = 1
       ("Senior Property Manager", 75000.00, 1), -- id = 2
       ("Sales Leader", 60000.00, 2), -- id = 3
       ("Marketing Leader", 40000.00, 4), -- id = 4
       ("Admin", 40000.00, 1), -- id = 5
       ("Finance Director", 60000.00, 3), -- id = 6
       ("Junior Property Manager", 50000.00, 1), -- id = 7
       ("Realtor", 45000.00, 2); -- id = 8

INSERT INTO employees (first_name, last_name, role_id) 
VALUES ("Betty", "Best", 1), -- id = 1
       ("Jake", "Grodt", 2), -- id = 2
	("Hsin-Hsin", "Lin", 3), -- id = 3
       ("Bernadette", "Bernadino", 4), -- id = 4
       ("Brenda", "Chavez", 5), -- id = 5
       ("Sarah", "Meaden", 6), -- id = 6
       ("Yaser", "Hussain", 7), -- id = 7
       ("Allison", "Baker", 8), -- id = 8
       ("Cindy", "Nocente", 8); -- id = 9

UPDATE employees SET manager_id = 1 WHERE id IN (2, 3, 4, 5, 6);
UPDATE employees SET manager_id = 2 WHERE id IN (7);
UPDATE employees SET manager_id = 3 WHERE id IN (8, 9);