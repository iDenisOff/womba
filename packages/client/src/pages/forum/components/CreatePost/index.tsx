import React, { FormEvent } from "react";

import "./styles.scss";

type TCreatePost = {
    user: {
        id: string;
    } | null;
    setIsCreating?: (isCreating: boolean) => void;
};

const FORUM_API_BASE_URL = "http://localhost:3001";

export const CreatePost: React.FC<TCreatePost> = ({ user, setIsCreating }) => {
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

        fetch(`${FORUM_API_BASE_URL}/api/post/create_post`, {
            body,
            credentials: "include",
            headers,
            method: "POST"
        }).finally(() => {
            if (setIsCreating) {
                setIsCreating(false);
            }
        });
    };

    return (
        <form className="createForm" onSubmit={onSubmit}>
            <label htmlFor="title">Тема</label>
            <input className="input" id="title" name="title" type="text" />

            <label htmlFor="content">Содержание</label>
            <textarea className="input" id="content" name="content" rows={10}></textarea>

            <div className="submitCreate">
                <button type="submit">Создать</button>
                <button
                    className="back"
                    type="button"
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => {
                        if (setIsCreating) {
                            setIsCreating(false);
                        }
                    }}
                >
                    Назад
                </button>
            </div>
        </form>
    );
};
