/* Replace with your SQL commands */
-- CREATE DATABASE post;
-- CREATE DATABASE post_test;

CREATE TABLE books (
    id SERIAL PRIMARY  KEY,
    title VARCHAR(150),
    total_pages integer,
    price integer,
    author VARCHAR(255),
    summary text
);