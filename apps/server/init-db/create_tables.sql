-- Active: 1701243570760@@127.0.0.1@5432@my_db
CREATE TABLE todos ( id SERIAL NOT NULL, title TEXT NOT NULL );

INSERT INTO todos (title)
VALUES ('Do homework'), ('Buy groceries'), ('Clean the house');