/* Replace with your SQL commands */

CREATE TABLE users (
    id SERIAL PRIMARY  KEY,
    firstName VARCHAR(150),
    lastName VARCHAR(150),
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(150),
    password VARCHAR(255)
);
