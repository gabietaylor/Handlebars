-- Create DB
CREATE DATABASE miscDB;

-- USE DB
USE miscDB;

-- Create Table
CREATE TABLE miscTable (
    id INT NOT NULL AUTO_INCREMENT,
    miscName VARCHAR(50),
    miscBool BOOLEAN,
    date TIMESTAMP
);