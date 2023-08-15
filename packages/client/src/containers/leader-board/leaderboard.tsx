import { getIsFetching, getLeaders, loadLeaders } from "@redux/leaders";
import { store } from "@redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Row } from "./components/row";

import "./styles.scss";

export const Leaderboard: React.FC = () => {
    useEffect(() => {
        store.dispatch(loadLeaders());
    }, []);

    const leaders = useSelector(getLeaders);
    const isLoading = useSelector(getIsFetching);

    return (
        <>
            {isLoading ? (
                <div>Загрузка</div>
            ) : (
                <div className="leaders">
                    <div className="leaders__header">
                        <div className="leaders__header__cell">Лучшие игроки</div>
                        <div className="leaders__header__cell">Счет</div>
                    </div>
                    {leaders.map(leader => (
                        <Row
                            avatar={leader.data.avatar}
                            login={leader.data.login}
                            womba={leader.data.womba}
                        />
                    ))}
                </div>
            )}
        </>
    );
};
