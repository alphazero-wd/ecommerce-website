const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/ErrorResponse');
const auth = (req, _res, next) => {
  try {
    const authHeaders = req.headers.authorization;

    if (!authHeaders || !authHeaders.startsWith('Bearer '))
      return next(new ErrorResponse('No Token Provided.', 400));

    const token = authHeaders.split(' ')[1];
    let decodedData;

    if (token && token.length < 500) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.userId = decodedData.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData.sub;
    }
  } catch (error) {
    next(error);
  }
};
module.exports = auth;
