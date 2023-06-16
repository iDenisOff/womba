import React, { useRef, useEffect } from 'react';

import Game from '../../core/game/Game';

type TCanvasProps = {
    height: string;
    width: string;
};

const GameContainer: React.FC<TCanvasProps> = ({ height, width }) => {
    const canvasRef = useRef(null);
    const gameRef = useRef<Game | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            gameRef.current = new Game(canvasRef.current);
        }

        gameRef.current?.start();
    }, []);

    return <canvas width={width} height={height} ref={canvasRef}></canvas>;
};

export default GameContainer;
