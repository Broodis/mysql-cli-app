DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    price INT default 0,
    stock INT default 0,
    PRIMARY KEY (id)
);

INSERT INTO products (product, department, price, stock)
VALUES ("product 1", "department 1", 1, 10), ("product 2", "department 2", 2, 20), ("product 3", "department 3", 3, 30), ("product 4", "department 4", 4, 40), ("product 5", "department 5", 5, 50), ("product 6", "department 6", 6, 60), ("product 7", "department 7", 7, 70), ("product 8", "department 8", 8, 80), ("product 9", "department 9", 9, 90), ("product 10", "department 10", 10, 100);