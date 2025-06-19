Build-A-Beast Adventure

Develop a REST API that allows users to create and manage their own fantasy creatures! Users can add, view, update, and delete creatures, defining attributes like “name,” “type” (e.g., dragon, unicorn, alien), “special abilities,” and “weaknesses.” Include an endpoint that generates a random creature with randomized attributes.

Routes created to view, create, update, delete and get random creatures with endpoint.

Connected to Mongdo where data is being stored.

Assignment 5:

Define Mongoose schemas and models for User and Blog with appropriate validation rules:
User Schema: name, email, password (hashed).
Blog Schema: title, content, author (reference to User), and timestamps.

Implement backend API routes using Express.js to perform CRUD operations:
POST: Add a new user or blog.
GET: Retrieve users or blogs.
PUT/PATCH: Update user or blog details.
DELETE: Remove a user or blog.
