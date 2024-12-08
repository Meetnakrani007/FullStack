CREATE DATABASE collage;
USE collage;

CREATE TABLE student(
rollno INT,
name VARCHAR(30),
age INT
);

INSERT INTO student
VALUE
(101,"meet",18),
(102,"dhruv",18),
(103,"vrajesh",19);

SELECT * FROM student;
