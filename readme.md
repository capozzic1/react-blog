To run, first npm install the dependencies, then npm run dev-server

This is a blog made with React/Redux for the front end and state management, Radium
for styling the CSS, and MongoDB for storing the posts. It sits on an Express server.

Features:
- Add a posts
- Update a post
- Delete a post
- Delete all posts


Simple authorization system utilizing passport-local-mongoose:
-Register
-Login
-Log out

Demo site: https://reactreduxblogcc.herokuapp.com
user demo credentials:
user: test@21.com,
pw: test


It uses react router for the routes. There routes are at:
/  for the list of posts
/login for logging in
/signup
/dashboard for edit/delete/new post/ delete all controls
/single for single view of a post
/newpost for creation of a new post
