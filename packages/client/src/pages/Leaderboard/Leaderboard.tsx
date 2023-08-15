import { withProtection, Leaderboard } from "@containers";

import "./styles.scss";

export const LeaderBoardPage = withProtection(() => {
    return (
        <div className="leaders-page">
            <Leaderboard />
        </div>
    );
});
