const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.REACT_APP_JSON_WEB_T, { expiresIn: '1d' });
};
  
module.exports = generateToken;