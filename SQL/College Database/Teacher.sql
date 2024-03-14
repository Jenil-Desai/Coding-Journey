CREATE DATABASE college;

USE college;

CREATE TABLE teacher (
	id INT PRIMARY KEY,
    name VARCHAR(25),
    subject VARCHAR(10),
    salary INT
);

INSERT INTO teacher
(id,name,subject,salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT *
FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary  ctc INT;

SET SQL_SAFE_UPDATES = 0;

UPDATE teacher
SET ctc = ctc + ctc * 0.25;

ALTER TABLE teacher
ADD city VARCHAR(25) DEFAULT "Gurgaon";

ALTER TABLE teacher
DROP COLUMN  ctc;

SELECT * FROM teacher;