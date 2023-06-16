import debugResolve from '../../logger/debugResolve';
import BoardCanvas from '../board/BoardCanvas';

const debug = debugResolve('Game');

class Game {
    #boardCanvas: BoardCanvas;

    constructor(canvas: HTMLCanvasElement) {
        this.#boardCanvas = new BoardCanvas(canvas);
    }

    start() {
        debug('start');

        this.#boardCanvas.drawBoard();
    }
}

export default Game;
