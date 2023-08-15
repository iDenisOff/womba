import { withProtection } from "@containers";
import React from "react";

import { CreatePost } from "./components/CreatePost";
import { ForumList } from "./components/ForumList";
import { ViewPost } from "./components/ViewPost";

import plusIcon from "../../static/plus.svg";
import { ServerErrorPage } from "../500";

import "./styles.scss";

const FORUM_API_BASE_URL = "http://localhost:3001";

export const ForumPage = withProtection(({ user }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isCreating, setIsCreating] = React.useState(false);
    const [post, setPost] = React.useState("");
    const [error, setError] = React.useState<string | undefined>(undefined);
    const [forumUser, setForumUer] = React.useState<{ id: string } | null>(null);

    React.useEffect(() => {
        const headers = new Headers();

        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        const { email } = user;

        const userData = {
            email,
            password: email
        };

        setIsLoading(true);

        fetch(`${FORUM_API_BASE_URL}/api/auth/login`, {
            body: JSON.stringify(userData),
            credentials: "include",
            headers,
            method: "POST"
        })
            .then(response => {
                return response.json();
            })
            .then(apiResponse => {
                if (!!apiResponse.error) {
                    return fetch(`${FORUM_API_BASE_URL}/api/auth/signup`, {
                        body: JSON.stringify(userData),
                        credentials: "include",
                        headers,
                        method: "POST"
                    }).then(response => {
                        return response.json();
                    });
                } else if (apiResponse.email && apiResponse.id) {
                    setForumUer({ id: apiResponse.id });
                }
            })
            .then(signUpResponse => {
                if (signUpResponse?.email && signUpResponse?.id) {
                    setForumUer({ id: signUpResponse.id });
                }
            })
            .catch((error: Error) => {
                console.log("🚀 ~ file: index.tsx:110 ~ React.useEffect ~ error:", error);
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!user) {
        return null;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!!error) {
        return <ServerErrorPage />;
    }

    if (isCreating) {
        return <CreatePost user={forumUser} setIsCreating={setIsCreating} />;
    }

    if (!!post) {
        return <ViewPost postId={post} setPost={setPost} />;
    }

    return (
        <div className="forum">
            <div className="forum__header">
                <div className="forum__header__cell">Форум</div>
                <button className="row_cell_button" onClick={() => setIsCreating(true)}>
                    <img src={plusIcon} alt="plus" />
                </button>
            </div>

            <ForumList setPost={setPost} />
        </div>
    );
});
