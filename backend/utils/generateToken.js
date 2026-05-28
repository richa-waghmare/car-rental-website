const jwt = require('jsonwebtoken');
const generateToken = (userID,role) =>{
    return jwt.sign(
        {id:userID,role},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
    );
};

module.exports = generateToken;