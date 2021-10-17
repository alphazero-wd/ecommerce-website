const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Must Be Provided."],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name Must Be Provided."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email Must Be Provided."],
    unique: true,
    trim: true,
    validate: {
      validator: v => {
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          v
        );
      },
      message: "Invalid Email.",
    },
  },
  password: {
    type: String,
    required: [true, "Password Cannot Be Empty"],
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
