import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '@ui/components'

describe('button component', () => {
  test('render button component', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('render button component children', () => {
    render(<Button>My btn</Button>)
    expect(screen.getByText(/my btn/i)).toBeInTheDocument()
  })
  test('render button component children', () => {
    render(<Button>My btn</Button>)
    expect(screen.getByText(/my btn/i)).toBeInTheDocument()
  })
})
