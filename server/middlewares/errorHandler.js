const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, _req, res, next) => {
  let errors = { ...err };
  if (err.type === 'ValidationError') {
    const messages = Object.values(err.message).map((value) => value.message);
    errors = new ErrorResponse(messages, 400);
  }

  res.status(errors.statusCode || 500).json({
    success: false,
    message: errors || 'Internal Server Error.',
  });
  next();
};

module.exports = errorHandler;
