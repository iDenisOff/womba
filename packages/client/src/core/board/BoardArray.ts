/* eslint-disable @typescript-eslint/member-delimiter-style */
import getRandomIndex from './getRandomIndex';

import debugResolve from '../../logger/debugResolve';

type TBoard = {
    id: string;
    val: number;
    isAvailable: boolean;
};

const debug = debugResolve('BoardArray');

class BoardArray {
    board: TBoard[][] = [
        [
            {
                id: '00',
                val: 0,
                isAvailable: true
            },
            {
                id: '01',
                val: 0,
                isAvailable: true
            },
            {
                id: '02',
                val: 0,
                isAvailable: true
            },
            {
                id: '03',
                val: 0,
                isAvailable: true
            }
        ],
        [
            {
                id: '10',
                val: 0,
                isAvailable: true
            },
            {
                id: '11',
                val: 0,
                isAvailable: true
            },
            {
                id: '12',
                val: 0,
                isAvailable: true
            },
            {
                id: '13',
                val: 0,
                isAvailable: true
            }
        ],
        [
            {
                id: '20',
                val: 0,
                isAvailable: true
            },
            {
                id: '21',
                val: 0,
                isAvailable: true
            },
            {
                id: '22',
                val: 0,
                isAvailable: true
            },
            {
                id: '23',
                val: 0,
                isAvailable: true
            }
        ],
        [
            {
                id: '30',
                val: 0,
                isAvailable: true
            },
            {
                id: '31',
                val: 0,
                isAvailable: true
            },
            {
                id: '32',
                val: 0,
                isAvailable: true
            },
            {
                id: '33',
                val: 0,
                isAvailable: true
            }
        ]
    ];

    possibleValues: number[] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 4];

    get possibleValuesLength() {
        return this.possibleValues.length;
    }

    get availableSquares() {
        return this.board.reduce((acc: string[], row: TBoard[]) => {
            const ids = row.reduce((accRow: string[], val: TBoard) => {
                if (val.isAvailable) {
                    accRow.push(val.id);
                }

                return accRow;
            }, []);

            acc = acc.concat(ids);

            return acc;
        }, []);
    }

    getRandomValues(): { randomValueFirst: number; randomValueSecond: number } {
        const randomValueFirst = this.possibleValues[getRandomIndex(this.possibleValuesLength)];
        const randomValueSecond = this.possibleValues[getRandomIndex(this.possibleValuesLength)];

        debug('randomValueFirst randomValueSecond', randomValueFirst, randomValueSecond);

        return { randomValueFirst, randomValueSecond };
    }

    getRandomSquareIds(): { idFirst: string; idSecond: string } {
        debug('availableSquares', this.availableSquares);

        const availableSquaresLength = this.availableSquares.length;

        let randomSquareIndexFirst = getRandomIndex(availableSquaresLength);
        let randomSquareIndexSecond = getRandomIndex(availableSquaresLength);

        while (randomSquareIndexFirst === randomSquareIndexSecond) {
            randomSquareIndexFirst = getRandomIndex(availableSquaresLength);
            randomSquareIndexSecond = getRandomIndex(availableSquaresLength);
        }

        debug(
            'randomSquareIndexFirst, randomSquareIndexSecond',
            randomSquareIndexFirst,
            randomSquareIndexSecond
        );

        const idFirst = this.availableSquares[randomSquareIndexFirst];
        const idSecond = this.availableSquares[randomSquareIndexSecond];

        debug('idFirst, idSecond', idFirst, idSecond);

        return { idFirst, idSecond };
    }

    setRandomValue() {
        const { randomValueFirst, randomValueSecond } = this.getRandomValues();
        const { idFirst, idSecond } = this.getRandomSquareIds();

        this.board.forEach((row: TBoard[]) => {
            row.forEach((col: TBoard) => {
                if (col.id === idFirst) {
                    col.val = randomValueFirst;
                }

                if (col.id === idSecond) {
                    col.val = randomValueSecond;
                }
            });
        });

        debug('board', this.board);
    }
}

export default BoardArray;
