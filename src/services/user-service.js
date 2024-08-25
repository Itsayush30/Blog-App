import { StatusCodes } from "http-status-codes";
import UserRepository from "../repository/user-repository.js";
import AppError from "../utils/errors/app-error.js";
import { checkPassword, createToken, verifyToken } from "../utils/common/auth.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      throw new AppError(
        "Cannot create a new user",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async signin(data) {
    try {
      const user = await this.userRepository.getUserByEmail(data.email);
      if (!user) {
        throw new AppError(
          "No user found for the given email",
          StatusCodes.NOT_FOUND
        );
      }
      const passwordMatch = checkPassword(data.password, user.password);
      if (!passwordMatch) {
        throw new AppError("Invalid Password", StatusCodes.BAD_REQUEST);
      }
      const jwt = createToken({ id: user.id, email: user.email });
      return jwt;
    } catch (error) {
      if (error instanceof AppError) throw error;
      console.log(error);
      throw new AppError(
        "Something went wrong",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async isAuthenticated(token) {
    try {
      if (!token) {
        throw new AppError("Missing JWT token", StatusCodes.BAD_REQUEST);
      }
      const response = verifyToken(token);
      const user = await this.userRepository.get(response.id);
      if (!user) {
        throw new AppError("No user found", StatusCodes.BAD_REQUEST);
      }
      return user.id;
    } catch (error) {
      if (error instanceof AppError) throw error;
      if (error.name === "JsonWebTokenError") {
        throw new AppError("Invalid JWT token", StatusCodes.BAD_REQUEST);
      }
      throw new AppError(
        "Something went wrong",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

export default UserService;
