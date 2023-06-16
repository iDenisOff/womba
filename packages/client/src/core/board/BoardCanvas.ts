import BoardArray from './BoardArray';

import debugResolve from '../../logger/debugResolve';

const debug = debugResolve('BoardCanvas');

class BoardCanvas {
    #canvas: HTMLCanvasElement;
    #canvasContext: CanvasRenderingContext2D;
    #boardArray: BoardArray;

    #SQUARE_WIDTH = 98;
    #SQUARE_HEIGHT = 98;
    #SQUARE_GAP = 8;
    #BACKGROUND_COLOR = '#bbada0';
    #SQUARE_BACKGROUND_COLOR = '#eee4da59';
    #SQUARE_TEXT_BACKGROUND_COLOR = '#eee4da';

    constructor(canvas: HTMLCanvasElement) {
        this.#canvas = canvas;
        this.#canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;
        this.#boardArray = new BoardArray();
    }

    drawBoard() {
        debug('drawBoard');

        this.colorRect(0, 0, this.#canvas.width, this.#canvas.height, this.#BACKGROUND_COLOR);

        this.setValues();
        this.drawSquares();
    }

    colorRect(
        topLeftX: number,
        topLeftY: number,
        boxWidth: number,
        boxHeight: number,
        fillColor: string
    ) {
        this.#canvasContext.fillStyle = fillColor;
        this.#canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
    }

    colorRectWithText(
        topLeftX: number,
        topLeftY: number,
        boxWidth: number,
        boxHeight: number,
        fillColor: string,
        text: string
    ) {
        this.#canvasContext.fillStyle = fillColor;
        this.#canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);

        this.#canvasContext.fillStyle = 'black';
        this.#canvasContext.textAlign = 'center';
        this.#canvasContext.textBaseline = 'middle';
        this.#canvasContext.font = '50px sans-serif';
        this.#canvasContext.fillText(text, topLeftX + boxWidth / 2, topLeftY + boxHeight / 2);
    }

    setValues() {
        this.#boardArray.setRandomValue();
    }

    drawSquares() {
        this.#boardArray.board.forEach((row, rowIdx) => {
            row.forEach(({ val }, colIdx) => {
                const topLeftX = this.#SQUARE_WIDTH * colIdx + this.#SQUARE_GAP;
                const topLeftY = this.#SQUARE_HEIGHT * rowIdx + this.#SQUARE_GAP;
                const squareBoxWidth = this.#SQUARE_WIDTH - this.#SQUARE_GAP;
                const squareBoxHeight = this.#SQUARE_HEIGHT - this.#SQUARE_GAP;

                if (val === 0) {
                    this.colorRect(
                        topLeftX,
                        topLeftY,
                        squareBoxWidth,
                        squareBoxHeight,
                        this.#SQUARE_BACKGROUND_COLOR
                    );
                } else {
                    this.colorRectWithText(
                        topLeftX,
                        topLeftY,
                        squareBoxWidth,
                        squareBoxHeight,
                        this.#SQUARE_TEXT_BACKGROUND_COLOR,
                        `${val}`
                    );
                }
            });
        });
    }
}

export default BoardCanvas;
