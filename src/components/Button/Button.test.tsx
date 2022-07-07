import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button Component', () => {
  test('Renders button currectly', async () => {
    render(<Button />)

    const button = await screen.findByRole(`button`)
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(`Criar`)
  })
})
