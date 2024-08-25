import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../utils/common.js";
import AppError from "../utils/errors/app-error.js";
import { isAuthenticated } from "../utils/common/auth.js";

function validateAuthRequest(req, res, next) {
  if (!req.body.email) {
    ErrorResponse.message = "Something went wrong while authenticating user";
    ErrorResponse.error = new AppError(
      ["Email not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.password) {
    ErrorResponse.message = "Something went wrong while authenticating user";
    ErrorResponse.error = new AppError(
      ["Password not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

async function checkAuth(req, res, next) {
  try {
    const response = await isAuthenticated(req.headers["x-access-token"]);
    if (response) {
      req.user = response;
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json(error);
  }
}

export { validateAuthRequest, checkAuth };
