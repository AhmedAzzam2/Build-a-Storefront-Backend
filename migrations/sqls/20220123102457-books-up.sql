/* Replace with your SQL commands */
CREATE DATABASE post;
CREATE DATABASE post_test;

CREATE TABLE books (
    id SERIAL PRIMARY  KEY,
    title VARCHAR(150),
    total_pages integer,
    author VARCHAR(255),
    type VARCHAR(100),
    summary text
);