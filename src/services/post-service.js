import { PostRepository } from "../repository/index.js";

class PostService {
  constructor() {
    this.postRepository = new PostRepository();
  }

  async createPost(data) {
    try {
      console.log("Creating post with data:", data);
      const post = await this.postRepository.create(data);
      return post;
    } catch (error) {
      throw error;
    }
  }

  async getPosts() {
    try {
      const posts = await this.postRepository.getAll();
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async getPostById(id) {
    try {
      console.log("Getting all user names");
      const posts = await this.postRepository.get(id);
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async updatePost(id,data) {
    try {
      console.log("Creating post with data:", data);
      const post = await this.postRepository.update(id,data);
      return post;
    } catch (error) {
      throw error;
    }
  }

  async deletePost(data) {
    try {
      console.log("Creating post with data:", data);
      const post = await this.postRepository.destroy(data);
      return post;
    } catch (error) {
      throw error;
    }
  }

}



export default PostService;
