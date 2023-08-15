import React, { FormEvent } from "react";
import { useQueryClient } from "react-query";

import "./styles.scss";

type TCreatePost = {
    isCreating: boolean;
    isEditing: boolean;
    postId: string;
    setIsCreating?: (isCreating: boolean) => void;
    setIsEditing?: (isEditing: boolean) => void;
};

const FORUM_API_BASE_URL = "http://localhost:3001";

const createPost = (body: string, headers: Headers) => {
    return fetch(`${FORUM_API_BASE_URL}/api/post/create_post`, {
        body,
        credentials: "include",
        headers,
        method: "POST"
    });
};

const editPost = (body: string, headers: Headers, postId: string, onSuccess: () => void) => {
    return fetch(`${FORUM_API_BASE_URL}/api/post/edit_post/${postId}`, {
        body,
        credentials: "include",
        headers,
        method: "PUT"
    }).then(() => {});
};

export const CreatePost: React.FC<TCreatePost> = ({
    isCreating,
    isEditing,
    setIsCreating,
    setIsEditing,
    postId
}) => {
    const queryClient = useQueryClient();
    // eslint-disable-next-line no-restricted-globals
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        // @ts-expect-error expected
        const data = new FormData(event.target);

        const title = data.get("title");
        const content = data.get("content");

        const body = JSON.stringify({ content, title });

        const headers = new Headers();

        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        if (isCreating) {
            createPost(body, headers).finally(() => {
                if (setIsCreating && isCreating) {
                    setIsCreating(false);
                }
            });
        }

        const onSuccessEdit = () => {
            queryClient.invalidateQueries("posts");
        };

        if (isEditing) {
            editPost(body, headers, postId, onSuccessEdit).finally(() => {
                if (setIsEditing && isEditing) {
                    setIsEditing(false);
                }
            });
        }
    };

    const formData = queryClient
        .getQueriesData<{ posts: [{ id: string; title: string; content: string }] }>({
            queryKey: "posts"
        })[0][1]
        ?.posts.filter(post => post.id === postId)[0];

    return (
        <form className="createForm" onSubmit={onSubmit}>
            <label htmlFor="title">Тема</label>
            <input
                className="input"
                id="title"
                name="title"
                type="text"
                defaultValue={isCreating ? "" : formData?.title}
            />

            <label htmlFor="content">Содержание</label>
            <textarea
                className="input"
                id="content"
                name="content"
                defaultValue={isCreating ? "" : formData?.content}
                rows={10}
            ></textarea>

            <div className="submitCreate">
                <button type="submit">{isCreating ? "Создать" : "Сохранить"}</button>
                <button
                    className="back"
                    type="button"
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => {
                        if (setIsCreating && isCreating) {
                            setIsCreating(false);
                        }

                        if (setIsEditing && isEditing) {
                            setIsEditing(false);
                        }
                    }}
                >
                    Назад
                </button>
            </div>
        </form>
    );
};
