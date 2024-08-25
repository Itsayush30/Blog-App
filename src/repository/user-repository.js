import CrudRepository from "./crud-reopository.js";
import User from "../models/user.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async getUserByEmail(email) {
    try {
      const result = await User.findOne({ email });
      return result;
    } catch (error) {
      console.log("Something went wrong in the user repository");
      throw error;
    }
  }
}

export default UserRepository;
