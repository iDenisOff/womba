/* eslint-disable react/jsx-no-bind */
import React from "react";
import { useQuery } from "react-query";

import { Loader } from "../Loader";

import "./styles.scss";

const FORUM_API_BASE_URL = "http://localhost:3001";
const REFETCH_INTERVAL = 10_000;

type TForumList = {
    setPost: (post: string) => void;
};

export const ForumList: React.FC<TForumList> = ({ setPost }) => {
    const { data, isLoading } = useQuery(
        "posts",
        () => {
            return fetch(`${FORUM_API_BASE_URL}/api/post/posts`, {
                credentials: "include",
                method: "GET"
            }).then(res => {
                return res.json();
            });
        },
        {
            refetchInterval: REFETCH_INTERVAL
        }
    );

    if (isLoading) {
        return <Loader />;
    }

    if (data?.posts?.length === 0) {
        return (
            <div className="row">
                <button className="row_cell" disabled>
                    Нет тем для отображения
                </button>
            </div>
        );
    }

    return data?.posts?.map((post: { id: string; title: string; content: string }) => {
        return (
            <div className="row" key={post.id}>
                <button className="row_cell" onClick={() => setPost(post.id)}>
                    {post.title}
                </button>
            </div>
        );
    });
};
