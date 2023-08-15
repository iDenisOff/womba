import React from "react";
import { useQuery, useQueryClient } from "react-query";

import { Loader } from "../Loader";

import "./styles.scss";

type TViewPost = {
    postId: string;
    setPost: (postId: string) => void;
};

const FORUM_API_BASE_URL = "http://localhost:3001";

export const ViewPost: React.FC<TViewPost> = ({ postId, setPost }) => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery(
        ["post", postId],
        () => {
            return fetch(`${FORUM_API_BASE_URL}/api/post/post/${postId}`, {
                credentials: "include",
                method: "GET"
            }).then(res => {
                return res.json();
            });
        },
        {
            initialData: () => {
                const initialPosts = queryClient.getQueryData<{
                    posts: { id: string; content: string; title: string }[];
                }>("posts");

                return {
                    post: initialPosts?.posts.find((post: { id: string }) => post.id === postId)
                };
            }
        }
    );

    if (isLoading) {
        return <Loader />;
    }

    console.log("🚀 ~ file: index.tsx:16 ~ data:", data);

    return (
        <div className="post">
            <div className="title">
                <h1>{data?.post?.title}</h1>
            </div>
            <div className="content">
                <p>{data?.post?.content}</p>
            </div>
            <button className="back" type="button" onClick={() => setPost("")}>
                Назад
            </button>
        </div>
    );
};
