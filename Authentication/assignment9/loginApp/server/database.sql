CREATE DATABASE jwtLoginAuth;


CREATE TABLE users(
 user_id uuid PRIMARY KEY DEFAULT 
 uuid_generate_v4(),
 user_name VARCHAR(255) NOT NULL,
 user_email VARCHAR(255) NOT NULL,
 user_password VARCHAR NOT NULL,
 user_role VARCHAR NOT NULL
);

--insert users

INSERT INTO users (user_name, user_email, user_password, user_role) VALUES ('testuserone', 'userone@test.com', 'onetester', 'admin');