// import the express router

//require express
const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

// define the endpoints
// POST /api/users/register: Register a new user
userRouter.post('/register', userController.register);

// export the app module
module.exports = userRouter;
