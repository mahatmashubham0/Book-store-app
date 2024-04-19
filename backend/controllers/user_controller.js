const { userServices } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { successResponse, errorResponse } = require("../utils/common");
const bcrypt = require("bcryptjs");
const User = require("../model/user_model");

async function createUser(req, res) {
  try {
    const { fullname, email, password } = req.body;
    const hashPwassord = await bcrypt.hash(password, 10);
    const user = await userServices.createUser({
      fullname: fullname,
      email: email,
      password: hashPwassord,
    });
    console.log(user);
    successResponse.data = user;
    return res.status(StatusCodes.OK).json({ successResponse });
  } catch (error) {
    errorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json({ errorResponse });
  }
}

async function RegisterUser(req, res) {
  try {
    const { fullname, email, password } = req.body;
    const hashPwassord = await bcrypt.hash(password, 10);
    const user = new User({
      fullname: fullname,
      email: email,
      password: hashPwassord,
    });
    await user.save();
    successResponse.data = user;
    return res.status(StatusCodes.OK).json({ successResponse });
  } catch (error) {
    errorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json({ errorResponse });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userServices.loginUser(email);
    console.log("==>",user);
    console.log(user.password);
    // const isMatch = bcrypt.compare(password, user.password);
    // console.log(isMatch);
    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        messge: "invalid email and password",
      });
    } else {
      successResponse.data = user;
      return res.status(StatusCodes.OK).json({
        user: {
          id: user._id,
          name: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("catch")
    errorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json({ errorResponse });
  }
}

async function destoryUser(req, res) {
  try {
    const user = await userServices.destoryUser(req.params.id);
    successResponse.data = user;
    return res.status(StatusCodes.OK).json({ successResponse });
  } catch (error) {
    errorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json({ errorResponse });
  }
}

async function getUser(req, res) {
  try {
    const user = await userServices.getUser(req.params.id);
    successResponse.data = user;
    return res.status(StatusCodes.OK).json({ successResponse });
  } catch (error) {
    errorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json({ errorResponse });
  }
}

async function getAllUser(req, res) {
  try {
    const user = await userServices.getAllUser();
    successResponse.data = user;
    return res.status(StatusCodes.OK).json({ successResponse });
  } catch (error) {
    errorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json({ errorResponse });
  }
}

async function updateUser(req, res) {
  try {
    const user = await userServices.updateUser(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      title: req.body.title,
    });
    successResponse.data = user;
    return res.status(StatusCodes.OK).json({ successResponse });
  } catch (error) {
    errorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json({ errorResponse });
  }
}

module.exports = {
  createUser,
  destoryUser,
  getUser,
  getAllUser,
  updateUser,
  loginUser,
  RegisterUser,
};
