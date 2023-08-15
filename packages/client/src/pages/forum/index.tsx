import { withProtection } from "@containers";
import React from "react";

import { ForumList } from "./components/ForumList";

import plusIcon from "../../static/plus.svg";
import { Theme } from "../../types/forum";
import { ServerErrorPage } from "../500";

import "./styles.scss";

const FORUM_API_BASE_URL = "http://localhost:3001";

const data: Theme[] = [
    {
        id: 1,
        title: "Новые игры"
    }
];

export const ForumPage = withProtection(({ user }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | undefined>(undefined);
    const [forumUser, setForumUer] = React.useState<{ id: string } | null>(null);

    console.log("🚀 ~ file: index.tsx:25 ~ ForumPage ~ forumUser:", forumUser);

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

    return (
        <div className="forum">
            <div className="forum__header">
                <div className="forum__header__cell">Форум</div>
                <button className="row_cell_button" onClick={() => console.log("onClick")}>
                    <img src={plusIcon} alt="plus" />
                </button>
            </div>
            {data.map(el => (
                <ForumList {...el} key={el.id} />
            ))}
        </div>
    );
});
