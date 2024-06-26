const jwt = require('jsonwebtoken');
const config = require('../utils/config');
const User = require('../models/user');

const auth = {
    verifyToken: (request, response, next) => {
        try {
            // Get the token from the request cookies
            const token = request.cookies.token;

            // If the token does not exist, return an error
            if (!token) {
                return response.status(401).json({ message: 'Unauthorized' });
            }

            // Verify the token
            try {
                const decodedToken = jwt.verify(token, config.JWT_SECRET);

                // Set the userId in the request object
                request.userId = decodedToken.id;

                // Call the next middleware
                next();
            } catch (error) {
                return response.status(401).json({ message: 'Invalid token' });
            }
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },

    isAdmin: async (request, response, next) => {
        try {
            // Get the user id from the request object
            const userId = request.userId;

            // Find the user by id
            const user = await User.findById(userId);

            // If the user is not an admin, return an error
            if (user.role !== 'admin') {
                return response.status(403).json({ message: 'Forbidden' });
            }

            // if the user is an admin, call the next middleware
            next();
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

// Export the auth object
module.exports = auth; 