import PostService from "../services/post-service.js";

const postService = new PostService();

export const createPost = async (req, res) => {
    try {
        console.log(req.body.title, req.body.content);
        const response = await postService.createPost({
            title: req.body.title,
            content: req.body.content,
        });

        return res.status(201).json({
            success: true,
            message: "Successfully created a new post",
            data: response,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error,
        });
    }
};

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPosts();
        return res.status(200).json({
            success: true,
            message: "Successfully retrieved posts",
            data: response,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error,
        });
    }
};

export const getPostById = async (req, res) => {
    try {
        console.log(req.params.id)
        const response = await postService.getPostById(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully retrieved user names",
            data: response,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error,
        });
    }
};

export const updatePost = async (req, res) => {
    try {
        console.log(req.body.title, req.body.content);
        const data = {
            title: req.body.title,
            content: req.body.content,
        }
        const response = await postService.updatePost(req.params.id, data);
        return res.status(201).json({
            success: true,
            message: "Successfully updated a post",
            data: response,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error,
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const response = await postService.deletePost(req.params.id);
        return res.status(201).json({
            success: true,
            message: "Successfully deleted a post",
            data: response,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error,
        });
    }
};