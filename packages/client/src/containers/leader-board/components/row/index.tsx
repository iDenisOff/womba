import React from "react";

import "./styles.scss";

type RowProps = {
    avatar: string;
    login: string;
    womba: number;
};

export const Row: React.FC<RowProps> = ({ avatar, login, womba }) => (
    <div className="leaderboardRow">
        <div className="leaderboardRow_cell">
            <img
                src={`https://ya-praktikum.tech/api/v2/resources/${avatar}`}
                className="leaderboardRow_cell_img"
                alt="avatar"
            />
        </div>
        <div className="leaderboardRow_cell">{login}</div>
        <div className="leaderboardRow_cell">{womba}</div>
    </div>
);
