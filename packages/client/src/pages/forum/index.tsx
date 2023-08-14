import { withProtection } from "@containers";
import React from "react";

import { Row } from "./components/row";

import { Theme } from "../../types/forum";
import { ServerErrorPage } from "../500";

import "./styles.scss";

const FORUM_API_BASE_URL = "http://localhost:3001";

const data: Theme[] = [
    {
        id: 1,
        title: "Новые игры",
        themeCount: 222,
        answerCount: 345
    },
    {
        id: 2,
        title: "Геймдизайнеры",
        themeCount: 5,
        answerCount: 14
    },
    {
        id: 3,
        title: "Технологии",
        themeCount: 590,
        answerCount: 895
    },
    {
        id: 4,
        title: "Новые игры",
        themeCount: 222,
        answerCount: 345
    },
    {
        id: 5,
        title: "Геймдизайнеры",
        themeCount: 5,
        answerCount: 14
    },
    {
        id: 6,
        title: "Технологии",
        themeCount: 590,
        answerCount: 895
    },
    {
        id: 7,
        title: "Новые игры",
        themeCount: 222,
        answerCount: 345
    },
    {
        id: 8,
        title: "Геймдизайнеры",
        themeCount: 5,
        answerCount: 14
    }
];

export const ForumPage = withProtection(({ user }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | undefined>(undefined);
    const [forumUser, setForumUer] = React.useState<{ id: string } | null>(null);

    React.useEffect(() => {
        const headers = new Headers();

        headers.append("Content-type", "application/json");

        const { email } = user;

        const userData = {
            email,
            password: email
        };

        setIsLoading(true);

        fetch(`${FORUM_API_BASE_URL}/api/auth/login`, {
            body: JSON.stringify(userData),
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

    console.log("🚀 ~ file: index.tsx:69 ~ ForumPage ~ forumUser:", forumUser);

    return (
        <div className="forum">
            <div className="forum__header">
                <div className="forum__header__cell">Форумы</div>
                <div className="forum__header__cell">Темы</div>
                <div className="forum__header__cell">Ответы</div>
            </div>
            {data.map(el => (
                <Row {...el} key={el.id} />
            ))}
        </div>
    );
});
