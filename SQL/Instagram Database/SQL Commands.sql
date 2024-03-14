CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;
CREATE TABLE user(
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY (id)
);

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO user
(id,age,name,email,followers,following)
VALUES
(11,14,"adam","adam1@yahoo.in",123,145),
(22,15,"bob","bob1232@gmail.com",200,200),
(33,16,"casey","casey3@email.com",300,306),
(44,17,"donald","donald4@gmail.com",200,105);

SELECT * FROM instagram.user;

SELECT name,followers,age FROM instagram.user
WHERE age >= 16 AND followers >= 200;

SELECT name,age FROM instagram.user
WHERE age BETWEEN 15 AND 17;

SELECT name,email FROM instagram.user
WHERE email IN ("adam1@yahoo.in", "adam@yahoo.in");

SELECT name,email FROM instagram.user
WHERE email NOT IN ("adam1@yahoo.in", "adam@yahoo.in");

SELECT name,followers FROM instagram.user
ORDER BY followers ASC;

SELECT max(followers)
FROM user;

SELECT min(followers)
FROM user;

SELECT count(age)
FROM user
WHERE age = 14;

SELECT sum(followers)
FROM user;

SELECT age, count(id)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age  DESC;

SET SQL_SAFE_UPDATES = 0;

UPDATE user
SET followers = 600
WHERE age = 16;

SELECT name,age,followers
FROM user;

DELETE FROM user
WHERE age =  14;

ALTER TABLE user
ADD column city VARCHAR(25) DEFAULT "Rajkot";

ALTER TABLE user
DROP COLUMN age;

ALTER TABLE user
RENAME TO instaUser;

ALTER TABLE instauser
RENAME TO user; 

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

ALTER TABLE user
MODIFY subs INT DEFAULT 5;

INSERT INTO user
(id,name,email,following)
VALUES
(90,"gemini","gemini@gmail.com",350);

SELECT * FROM user;

DROP TABLE post;

TRUNCATE TABLE user;

SELECT * FROM user;

DROP TABLE user;