import '@testing-library/jest-dom'
import BoardArray from '../core/board/BoardArray'

type TBoard = {
  id: string
  val: number
  isAvailable: boolean
}

let board = new BoardArray()
const randomValue = 2
const setValue = (id: string, value?: number) => {
  board.board.forEach((row: TBoard[]) => {
    row.forEach((col: TBoard) => {
      if (col.id === id) {
        col.val = !value ? randomValue : value
        col.isAvailable = false
      }
    })
  })
}
const resetValue = () => {
  board = new BoardArray()
}
describe('test move game', () => {
  test('move up', () => {
    const boardtest: TBoard[][] = [
      [
        {
          id: '00',
          val: 2,
          isAvailable: false,
        },
        {
          id: '01',
          val: 0,
          isAvailable: true,
        },
        {
          id: '02',
          val: 2,
          isAvailable: false,
        },
        {
          id: '03',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '10',
          val: 0,
          isAvailable: true,
        },
        {
          id: '11',
          val: 0,
          isAvailable: true,
        },
        {
          id: '12',
          val: 0,
          isAvailable: true,
        },
        {
          id: '13',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '20',
          val: 0,
          isAvailable: true,
        },
        {
          id: '21',
          val: 0,
          isAvailable: true,
        },
        {
          id: '22',
          val: 0,
          isAvailable: true,
        },
        {
          id: '23',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '30',
          val: 0,
          isAvailable: true,
        },
        {
          id: '31',
          val: 0,
          isAvailable: true,
        },
        {
          id: '32',
          val: 0,
          isAvailable: true,
        },
        {
          id: '33',
          val: 0,
          isAvailable: true,
        },
      ],
    ]
    setValue('20')
    setValue('22')

    board.moveUp()
    expect(board.board).toEqual(boardtest)
    resetValue()
  })
  test('move down', () => {
    const boardtest: TBoard[][] = [
      [
        {
          id: '00',
          val: 0,
          isAvailable: true,
        },
        {
          id: '01',
          val: 0,
          isAvailable: true,
        },
        {
          id: '02',
          val: 0,
          isAvailable: true,
        },
        {
          id: '03',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '10',
          val: 0,
          isAvailable: true,
        },
        {
          id: '11',
          val: 0,
          isAvailable: true,
        },
        {
          id: '12',
          val: 0,
          isAvailable: true,
        },
        {
          id: '13',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '20',
          val: 0,
          isAvailable: true,
        },
        {
          id: '21',
          val: 0,
          isAvailable: true,
        },
        {
          id: '22',
          val: 0,
          isAvailable: true,
        },
        {
          id: '23',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '30',
          val: 2,
          isAvailable: false,
        },
        {
          id: '31',
          val: 0,
          isAvailable: true,
        },
        {
          id: '32',
          val: 2,
          isAvailable: false,
        },
        {
          id: '33',
          val: 0,
          isAvailable: true,
        },
      ],
    ]
    setValue('00')
    setValue('02')
    board.moveDown()
    expect(board.board).toEqual(boardtest)
    resetValue()
  })
  test('move left', () => {
    const boardtest: TBoard[][] = [
      [
        {
          id: '00',
          val: 2,
          isAvailable: false,
        },
        {
          id: '01',
          val: 0,
          isAvailable: true,
        },
        {
          id: '02',
          val: 0,
          isAvailable: true,
        },
        {
          id: '03',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '10',
          val: 2,
          isAvailable: false,
        },
        {
          id: '11',
          val: 0,
          isAvailable: true,
        },
        {
          id: '12',
          val: 0,
          isAvailable: true,
        },
        {
          id: '13',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '20',
          val: 0,
          isAvailable: true,
        },
        {
          id: '21',
          val: 0,
          isAvailable: true,
        },
        {
          id: '22',
          val: 0,
          isAvailable: true,
        },
        {
          id: '23',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '30',
          val: 0,
          isAvailable: true,
        },
        {
          id: '31',
          val: 0,
          isAvailable: true,
        },
        {
          id: '32',
          val: 0,
          isAvailable: true,
        },
        {
          id: '33',
          val: 0,
          isAvailable: true,
        },
      ],
    ]
    setValue('03')
    setValue('13')
    board.moveLeft()
    expect(board.board).toEqual(boardtest)
    resetValue()
  })
  test('move right', () => {
    const boardtest: TBoard[][] = [
      [
        {
          id: '00',
          val: 0,
          isAvailable: true,
        },
        {
          id: '01',
          val: 0,
          isAvailable: true,
        },
        {
          id: '02',
          val: 0,
          isAvailable: true,
        },
        {
          id: '03',
          val: 2,
          isAvailable: false,
        },
      ],
      [
        {
          id: '10',
          val: 0,
          isAvailable: true,
        },
        {
          id: '11',
          val: 0,
          isAvailable: true,
        },
        {
          id: '12',
          val: 0,
          isAvailable: true,
        },
        {
          id: '13',
          val: 2,
          isAvailable: false,
        },
      ],
      [
        {
          id: '20',
          val: 0,
          isAvailable: true,
        },
        {
          id: '21',
          val: 0,
          isAvailable: true,
        },
        {
          id: '22',
          val: 0,
          isAvailable: true,
        },
        {
          id: '23',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '30',
          val: 0,
          isAvailable: true,
        },
        {
          id: '31',
          val: 0,
          isAvailable: true,
        },
        {
          id: '32',
          val: 0,
          isAvailable: true,
        },
        {
          id: '33',
          val: 0,
          isAvailable: true,
        },
      ],
    ]
    setValue('00')
    setValue('10')
    board.moveRight()
    expect(board.board).toEqual(boardtest)
    resetValue()
  })
})

describe('merge squares', () => {
  test('merge up', () => {
    const expectedBoard: TBoard[][] = [
      [
        {
          id: '00',
          val: 4,
          isAvailable: false,
        },
        {
          id: '01',
          val: 0,
          isAvailable: true,
        },
        {
          id: '02',
          val: 0,
          isAvailable: true,
        },
        {
          id: '03',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '10',
          val: 0,
          isAvailable: true,
        },
        {
          id: '11',
          val: 0,
          isAvailable: true,
        },
        {
          id: '12',
          val: 0,
          isAvailable: true,
        },
        {
          id: '13',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '20',
          val: 0,
          isAvailable: true,
        },
        {
          id: '21',
          val: 0,
          isAvailable: true,
        },
        {
          id: '22',
          val: 0,
          isAvailable: true,
        },
        {
          id: '23',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '30',
          val: 0,
          isAvailable: true,
        },
        {
          id: '31',
          val: 0,
          isAvailable: true,
        },
        {
          id: '32',
          val: 0,
          isAvailable: true,
        },
        {
          id: '33',
          val: 0,
          isAvailable: true,
        },
      ],
    ]
    setValue('00')
    setValue('10')
    board.moveUp()
    expect(board.board).toEqual(expectedBoard)
    resetValue()
  })
  test('merge down', () => {
    const expectedBoard: TBoard[][] = [
      [
        {
          id: '00',
          val: 0,
          isAvailable: true,
        },
        {
          id: '01',
          val: 0,
          isAvailable: true,
        },
        {
          id: '02',
          val: 0,
          isAvailable: true,
        },
        {
          id: '03',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '10',
          val: 0,
          isAvailable: true,
        },
        {
          id: '11',
          val: 0,
          isAvailable: true,
        },
        {
          id: '12',
          val: 0,
          isAvailable: true,
        },
        {
          id: '13',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '20',
          val: 0,
          isAvailable: true,
        },
        {
          id: '21',
          val: 0,
          isAvailable: true,
        },
        {
          id: '22',
          val: 0,
          isAvailable: true,
        },
        {
          id: '23',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '30',
          val: 4,
          isAvailable: false,
        },
        {
          id: '31',
          val: 0,
          isAvailable: true,
        },
        {
          id: '32',
          val: 0,
          isAvailable: true,
        },
        {
          id: '33',
          val: 0,
          isAvailable: true,
        },
      ],
    ]
    setValue('00')
    setValue('10')
    board.moveDown()
    expect(board.board).toEqual(expectedBoard)
    resetValue()
  })
  test('merge left', () => {
    const expectedBoard: TBoard[][] = [
      [
        {
          id: '00',
          val: 4,
          isAvailable: false,
        },
        {
          id: '01',
          val: 0,
          isAvailable: true,
        },
        {
          id: '02',
          val: 0,
          isAvailable: true,
        },
        {
          id: '03',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '10',
          val: 0,
          isAvailable: true,
        },
        {
          id: '11',
          val: 0,
          isAvailable: true,
        },
        {
          id: '12',
          val: 0,
          isAvailable: true,
        },
        {
          id: '13',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '20',
          val: 0,
          isAvailable: true,
        },
        {
          id: '21',
          val: 0,
          isAvailable: true,
        },
        {
          id: '22',
          val: 0,
          isAvailable: true,
        },
        {
          id: '23',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '30',
          val: 0,
          isAvailable: true,
        },
        {
          id: '31',
          val: 0,
          isAvailable: true,
        },
        {
          id: '32',
          val: 0,
          isAvailable: true,
        },
        {
          id: '33',
          val: 0,
          isAvailable: true,
        },
      ],
    ]
    setValue('00')
    setValue('01')
    board.moveLeft()
    expect(board.board).toEqual(expectedBoard)
    resetValue()
  })
  test('merge right', () => {
    const expectedBoard: TBoard[][] = [
      [
        {
          id: '00',
          val: 0,
          isAvailable: true,
        },
        {
          id: '01',
          val: 0,
          isAvailable: true,
        },
        {
          id: '02',
          val: 0,
          isAvailable: true,
        },
        {
          id: '03',
          val: 4,
          isAvailable: false,
        },
      ],
      [
        {
          id: '10',
          val: 0,
          isAvailable: true,
        },
        {
          id: '11',
          val: 0,
          isAvailable: true,
        },
        {
          id: '12',
          val: 0,
          isAvailable: true,
        },
        {
          id: '13',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '20',
          val: 0,
          isAvailable: true,
        },
        {
          id: '21',
          val: 0,
          isAvailable: true,
        },
        {
          id: '22',
          val: 0,
          isAvailable: true,
        },
        {
          id: '23',
          val: 0,
          isAvailable: true,
        },
      ],
      [
        {
          id: '30',
          val: 0,
          isAvailable: true,
        },
        {
          id: '31',
          val: 0,
          isAvailable: true,
        },
        {
          id: '32',
          val: 0,
          isAvailable: true,
        },
        {
          id: '33',
          val: 0,
          isAvailable: true,
        },
      ],
    ]
    setValue('00')
    setValue('01')
    board.moveRight()
    expect(board.board).toEqual(expectedBoard)
    resetValue()
  })
})

describe('end game', () => {
  test('game over', () => {
    setValue('00', 2)
    setValue('01', 4)
    setValue('02', 2)
    setValue('03', 4)
    setValue('10', 4)
    setValue('11', 2)
    setValue('12', 4)
    setValue('13', 2)
    setValue('20', 2)
    setValue('21', 4)
    setValue('22', 2)
    setValue('23', 4)
    setValue('30', 4)
    setValue('31', 2)
    setValue('32', 4)
    setValue('33', 2)

    board.moveDown()
    expect(board.hasGameOver()).toEqual(true)
  })
})
