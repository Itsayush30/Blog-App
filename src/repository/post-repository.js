import Post from "../models/post.js";
import CrudRepository from "./crud-reopository.js";

class PostRepository extends CrudRepository {
  constructor() {
    super(Post);
  }

  async findByUserName(user_name) {
    try {
      const posts = await this.model.find({ user_name });
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async getAllUserName() {
    try {
      const posts = await this.model.find({}, { user_name: 1, _id: 0 });
      return posts;
    } catch (error) {
      throw error;
    }
  }
}

export default PostRepository;
