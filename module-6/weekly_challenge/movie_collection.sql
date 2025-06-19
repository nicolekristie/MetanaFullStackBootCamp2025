select * from actors

Insert into actors(actor_id, actor_name, movie_id)
Values (222, 'Ben Stiller',100)
Insert into actors(actor_id, actor_name, movie_id)
Values (333, 'Cameron Diaz',100)
Insert into actors(actor_id, actor_name, movie_id)
Values (444, 'Sally Cooper',800)
Insert into actors(actor_id, actor_name, movie_id)
Values (555, 'Nancy Drew', 900)

select * from directors

Insert into directors (director_id, director_name, phone_number, movie_id) 
Values(112, 'Peter Farrelly', '555-232-3839', 100)  

Insert into directors (director_id, director_name, phone_number, movie_id) 
Values(125, 'Mike Jones', '555-888-1234', 200) 

Insert into directors (director_id, director_name, phone_number, movie_id) 
Values(225, 'Steven King', '232-555-4311', 700) 

-- (100,400,600,110));


ALTER TABLE directors
RENAME COLUMN name TO director_name;

select * from movies

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(100, 'Something Mary', 'Comedy', 1998, 'Peter Farrelly', ARRAY['Ben Stiller','Cameron Diaz','Matt Dillon'])

Update movies set title = 'Something About Mary' where movie_id=100;

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(200, 'Sunny Days', 'Comedy', 2001, 'Mike Jones', ARRAY['Sally Peters','John Brown','Peter Pan'])

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(300, 'Nightmare on Elm Street', 'Thriller', 1995, 'James Brown', ARRAY['Sally Peters','Tina Marie','Andrew Woods'])

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(400, 'Sunshine', 'Drama', 2024, 'Peter Farrelly', ARRAY['Ben Stiller','Cameron Diaz','Matt Dillon'])

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(500, 'TestMovie1', 'Drama', 2001, 'Steven Peters', ARRAY['Ben Stiller','Cameron Diaz','Matt Dillon'])

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(600, 'TestMovie2', 'Action', 2001, 'Peter Farrelly', ARRAY['Anne Micheals','Kevin Bacon','Tom Brady'])

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(700, 'Scary Things', 'Thriller', 2024, 'Steven King', ARRAY['Michael Jones','Gene Matthews','Sue Davis'])

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(800, 'Funny Times', 'Comedy', 1998, 'Carol Woods', ARRAY['Sally Cooper','Peter Pan','Matt Dillon'])

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(900, 'TestMovie3', 'Comedy', 2014, 'Nina James', ARRAY['Jan Brady','Mike Jones','Nancy Drew'])

Insert into movies (movie_id, title, genre, release_year, director, moviecast) 
Values(110, 'Real Times', 'Documentary', 2007, 'Peter Farrelly', ARRAY['Kate Hudson','Tony Bates','Jim Jones'])

select * from movies where director='Peter Farrelly'

select * from movies where release_year > 2014

select * from movies join actors ON movies.movie_id = actors.movie_id;

select * from movies Join actors on movies.movie.id = actors.movie_id