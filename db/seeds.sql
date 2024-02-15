INSERT INTO departments (name)
VALUES ("Property Management"),
       ("Real Estate"),
       ("Finance"),
       ("Marketing");

INSERT INTO roles (name, salary, department) 
VALUES ("Broker", 100000.00, "Real Estate"), 
       ("Senior Property Manager", 75000.00, "Property Management"),
       ("Sales Leader", 60000.00, "Real Estate"),
       ("Marketing Leader", 40000.00, "Marketing"),
       ("Admin", 40000.00, "Property Management"),
       ("Finance Director", 60000.00, "Finance"),
       ("Junior Property Manager", 50000.00, "Property Management"),
       ("Realtor", 45000.00, "Real Estate");

INSERT INTO employees (first_name, last_name, role, manager) 
VALUES ("Betty", "Best", "Broker", ""),
       ("Jake", "Grodt", "Senior Property Manager", "Betty Best"),
	   ("Hsin-Hsin", "Lin", "Sales Leader", "Betty Best"),
       ("Bernadette", "Bernadino", "Marketing Leader", "Betty Best"),
       ("Brenda", "Chavez", "Senior Property Manager", "Betty Best"),
       ("Sarah", "Meaden", "Finance Director", "Betty Best"),
       ("Yaser", "Hussain", "Junior Property Manager", "Jake Grodt"),
       ("Allison", "Baker", "Realtor", "Hsin-Hsin Lin"),
       ("Cindy", "Nocente", "Realtor", "Hsin-Hsin Lin");