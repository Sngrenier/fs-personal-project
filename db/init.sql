DROP TABLE item_combo;
DROP TABLE companies;
DROP TABLE categories;
DROP TABLE colors;
DROP TABLE order_items;
DROP TABLE orders;
DROP TABLE cart_items;
DROP TABLE cart;
DROP TABLE items;
DROP TABLE billing_address;
DROP TABLE shipping_address;
DROP TABLE users;



CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL,
email VARCHAR(50),
password VARCHAR(2500) NOT NULL,
first_name VARCHAR(50),
last_name VARCHAR(50),
phone_number VARCHAR(25)
);

CREATE TABLE shipping_address (
ship_address_id SERIAL PRIMARY KEY,
street VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
state VARCHAR(50) NOT NULL,
zip_code INTEGER NOT NULL,
user_id INT REFERENCES users(user_id)
);

CREATE TABLE billing_address (
bill_address_id SERIAL PRIMARY KEY,
street VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
state VARCHAR(50) NOT NULL,
zip_code INTEGER NOT NULL,
user_id INT REFERENCES users(user_id)
);

CREATE TABLE items (
item_id SERIAL PRIMARY KEY,
title VARCHAR(100) NOT NULL,
img VARCHAR,
price NUMERIC(10,2) NOT NULL,
company VARCHAR(100) NOT NULL,
info VARCHAR(2500) NOT NULL,
category VARCHAR(50)
);


CREATE TABLE cart (
 cart_id SERIAL PRIMARY KEY,
 user_id INT REFERENCES users(user_id),
--  active BOOLEAN default true
);

CREATE TABLE cart_items(
cartItems_id SERIAL PRIMARY KEY,
cart_id INT REFERENCES cart(cart_id),
item_id INT REFERENCES items(item_id),
quantity INT NOT NULL
);


CREATE TABLE category_items(
categoryItems_id SERIAL PRIMARY KEY,
item_id INT REFERENCES items(item_id),
category_id INT REFERENCES categories(category_id)
);

CREATE TABLE categories(
category_id SERIAL PRIMARY KEY,
category VARCHAR(50) NOT NULL
);


CREATE TABLE companies(
company_id SERIAL PRIMARY KEY,
company VARCHAR(50) NOT NULL
);


CREATE TABLE colors(
color_id SERIAL PRIMARY KEY,
color VARCHAR(50) NOT NULL
);


CREATE TABLE item_combo(
combo_id SERIAL PRIMARY KEY,
color_id INT REFERENCES colors(color_id),
category_id INT REFERENCES categories(category_id),
quantity INT NOT NULL
);


CREATE TABLE orders (
 order_id SERIAL PRIMARY KEY,
 user_id INT REFERENCES users(user_id),
 shipping_address INT REFERENCES shipping_address(ship_address_id),
 billing_address INT REFERENCES billing_address(bill_address_id)
);


CREATE TABLE order_items(
orderItems_id SERIAL PRIMARY KEY,
order_id INT REFERENCES cart(cart_id),
item_id INT REFERENCES items(item_id),
quantity INT NOT NULL
);