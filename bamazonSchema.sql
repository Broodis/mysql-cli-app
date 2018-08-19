DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INT default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product_name_1", "department_name_1", 10, 100), ("product_name_2", "department_name_2", 20, 200), ("product_name_3", "department_name_3", 30, 300), ("product_name_4", "department_name_4", 40, 400), ("product_name_5", "department_name_5", 50, 500), ("product_name_6", "department_name_6", 60, 600), ("product_name_7", "department_name_7", 70, 700), ("product_name_8", "department_name_8", 80, 800), ("product_name_9", "department_name_9", 90, 900), ("product_name_10", "department_name_10", 100, 1000);