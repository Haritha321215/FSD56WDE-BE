// define the controller
const userController = {
  register: async (request, response) => {
    response.send("register a new user");
  },
};

// export the controller
module.exports = userController;
