/* eslint-disable react/jsx-no-bind */
import React from "react";
import { useQuery, useQueryClient } from "react-query";

import { Loader } from "../Loader";

import "./styles.scss";

const FORUM_API_BASE_URL = "http://localhost:3001";
const REFETCH_INTERVAL = 10_000;

type TForumList = {
    setPost: (post: string) => void;
    userId: string | undefined;
    setIsEditing: (isEditing: boolean) => void;
    setEditedPostId: (editedPostId: string) => void;
};

export const ForumList: React.FC<TForumList> = ({
    setPost,
    setIsEditing,
    setEditedPostId,
    userId
}) => {
    const queryClient = useQueryClient();

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

    const deletePost = (postId: string) => {
        return fetch(`${FORUM_API_BASE_URL}/api/post/delete_post/${postId}`, {
            credentials: "include",
            method: "DELETE"
        })
            .then(response => {
                return response.json();
            })
            .then(({ success }) => {
                if (success) {
                    queryClient.invalidateQueries({ queryKey: "posts" });
                }
            });
    };

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

    return data?.posts?.map(
        (post: { id: string; userId: string; title: string; content: string }) => {
            const isShowPostButtons = userId && post.userId === userId;

            return (
                <div className="row" key={post.id}>
                    <button className="row_cell" onClick={() => setPost(post.id)}>
                        {post.title}
                    </button>
                    {isShowPostButtons && (
                        <>
                            <button
                                className="row_cell"
                                onClick={() => {
                                    setIsEditing(true);
                                    setEditedPostId(post.id);
                                }}
                            >
                                Редактировать
                            </button>

                            <button
                                className="row_cell"
                                onClick={() => {
                                    deletePost(post.id);
                                }}
                            >
                                Удалить
                            </button>
                        </>
                    )}
                </div>
            );
        }
    );
};
