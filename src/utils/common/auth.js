import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import dotenv from "dotenv";
import UserRepository from "../../repository/user-repository.js";
import AppError from "../errors/app-error.js";

dotenv.config();

const userRepository = new UserRepository();

function checkPassword(plainPassword, encryptedPassword) {
  try {
    return bcrypt.compareSync(plainPassword, encryptedPassword);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function createToken(input) {
  try {
    return jwt.sign(input, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function isAuthenticated(token) {
  try {
    if (!token) {
      throw new AppError("Missing JWT token", StatusCodes.BAD_REQUEST);
    }
    const response = verifyToken(token);
      const user = await userRepository.get(response.id);
      if (user) {
        return user.id;
      } else {
        throw new AppError("Not found", StatusCodes.BAD_REQUEST);
      }
    
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

export {
  checkPassword,
  createToken,
  verifyToken,
  isAuthenticated,
};
