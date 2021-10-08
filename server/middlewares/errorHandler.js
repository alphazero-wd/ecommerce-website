const errorHandler = (err, _req, res) =>
  res.status(500).json({
    success: false,
    message: err,
  });
module.exports = errorHandler;
