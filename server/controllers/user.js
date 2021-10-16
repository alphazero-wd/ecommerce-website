const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/ErrorResponse');
const signup = async (req, res, next) => {
  try {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return next(new ErrorResponse('User Already Exists', 400));

    if (password !== confirmPassword)
      return next(new ErrorResponse("Passwords Don't Match", 400));
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );
    return res.status(201).json({
      success: true,
      user: {
        name: newUser.name,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return next(new ErrorResponse("User Doesn't Exist.", 404));

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword)
      return next(new ErrorResponse('Incorrect Password.', 400));

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      success: true,
      user: {
        name: existingUser.name,
        email: existingUser.email,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, signin };
