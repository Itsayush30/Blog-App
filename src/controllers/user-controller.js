import { StatusCodes } from "http-status-codes";
import UserService from "../services/user-service.js";
import SuccessResponse from "../utils/common/success-response.js"
import ErrorResponse from "../utils/common/error-response.js"

const userService = new UserService();

export const createUser = async (req, res) => {
  try {
    const response = await userService.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
};

export const usersignin = async (req, res) => {
  try {
    const admin = await userService.signin({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = admin;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
};
