/* Replace with your SQL commands */

CREATE TABLE users (
    id SERIAL PRIMARY  KEY,
    firstname VARCHAR(150),
    lastname VARCHAR(150),
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(150),
    password VARCHAR(255)
);
