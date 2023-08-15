import type { Request, Response } from "express";

import Comment from "../models/Comment";
import Post from "../models/Post";
import Reaction from "../models/Reaction";
import Reply from "../models/Reply";

export const getPosts = async (_request: Request, response: Response) => {
    try {
        const posts = await Post.findAll();

        response.status(201).json({ posts });
    } catch (error) {
        response.status(500).json({ error: "Failed to fetch posts" });
    }
};

export const getPost = async (request: Request, response: Response) => {
    const postId = request.params["id"];

    try {
        const post = await Post.findOne({
            include: [
                {
                    include: [
                        { include: [{ model: Reaction }], model: Reply },
                        { model: Reaction }
                    ],
                    model: Comment
                },
                { model: Reaction }
            ],
            where: { id: postId }
        });

        response.status(201).json({ post });
    } catch (error) {
        response.status(500).json({ error: "Failed to fetch post" });
    }
};
export const createPost = async (request: Request, response: Response) => {
    const { content, title } = request.body;

    const { user } = response.locals;

    try {
        const post = await Post.create({ content, title, userId: user.id });

        response.status(201).json({ post });
    } catch (error) {
        response.status(500).json({ error: "Failed to create post" });
    }
};
export const editPost = async (request: Request, response: Response) => {
    const postId = request.params["id"];
    const { content, title } = request.body;
    const { user } = response.locals;

    try {
        const [count, posts] = await Post.update(
            { content, title },
            { returning: true, where: { id: postId, userId: user.id } }
        );

        response.status(201).json({ count, posts });
    } catch (error) {
        response.status(500).json({ error: "Failed to update post" });
    }
};
export const deletePost = async (request: Request, response: Response) => {
    const postId = request.params["id"];
    const { user } = response.locals;

    try {
        await Post.destroy({ where: { id: postId, userId: user.id } });

        response.status(201).json({ success: true });
    } catch (error) {
        response.status(500).json({ error: "Failed to delete post" });
    }
};
