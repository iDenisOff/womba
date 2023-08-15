import React from "react";
import { useQuery } from "react-query";

import { Theme } from "../../../../types/forum";
import { Loader } from "../Loader";

import "./styles.scss";

const FORUM_API_BASE_URL = "http://localhost:3001";
const REFETCH_INTERVAL = 10_000;

export const ForumList: React.FC<Theme> = ({ title }: Theme) => {
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

    return (
        <div className="row">
            <button className="row_cell" onClick={() => console.log("onClick")}>
                {title}
            </button>
        </div>
    );
};
