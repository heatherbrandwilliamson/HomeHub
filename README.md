# Home Hub 

![Login](/public/images/Login.png)

![Signup](/public/images/Signup.png)

Live Demo -  https://youtu.be/eCxuv5xKHkg

Home Hub is a comprehensive social media application where users can create posts about projects, like and comment on posts, manage their profile, and receive notifications.

The application is built with a React.js frontend, and an Express.js backend with a set of REST APIs.


## Technologies

Here's an overview of the technologies used to build this  application. 

### **M** is for MongoDB

### **E** is for Express

### **R** is for React

### **N** is for Node

## Architecture

This application is comprised of two distinct pieces.

- A backend API built with Express
- A front end built with React

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Start

1. Start the server

  **Note the use of an environment variable for the JWT secret**

   ```
   ; cd api
   ; JWT_SECRET=SUPER_SECRET npm start
   ```
2. Start the front end

  In a new terminal session...

  ```
  ; cd frontend
  ; npm start
  ```

You should now be able to open your browser and go to `http://localhost:3000/signup` to create a new user.
