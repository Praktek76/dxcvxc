-- select
SELECT first_name, age, country
FROM Customers
-- where
WHERE country = 'USA'
-- order by
ORDER BY age;
-- insert into
INSERT INTO Customers (first_name, last_name, age, country)
VALUES ('robert','robinson','25','uae');
-- update
UPDATE Customers
SET first_name = 'Alfred Schmidt', country= 'Frankfurt'
WHERE customer_id = 1;
-- delete
DELETE FROM Customers WHERE customer_id	='1';
