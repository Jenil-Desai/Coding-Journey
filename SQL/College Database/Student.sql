CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE student (
	roll_no INT PRIMARY KEY,
    name VARCHAR(25),
    city VARCHAR(10),
    marks INT
);

INSERT INTO student
(roll_no,name,city,marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM students;

SELECT * 
FROM student
WHERE marks > 75;

SELECT city
FROM student
GROUP BY city;

SELECT distinct city
FROM student;

SELECT city, max(marks)
FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = "O"
WHERE marks >= 80;

SELECT * FROM student;

UPDATE student
SET grade = "A"
WHERE marks > 70 AND marks < 80;

SELECT * FROM student;

UPDATE student
SET grade = "B"
WHERE  marks > 60 AND marks < 70;

SELECT * FROM student;