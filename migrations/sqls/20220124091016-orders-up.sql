
CREATE TABLE order_books (
    id SERIAL PRIMARY KEY,
    quantity integer NOT NULL,
    user_id bigint REFERENCES users(id),
    books_id bigint REFERENCES books(id),
    status VARCHAR(20) NOT NULL
);