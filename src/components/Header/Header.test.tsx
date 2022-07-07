import { render } from '@testing-library/react'
import { Header } from '.'

describe('Header Component', () => {
  test('Renders header correctly', () => {
    const { getByAltText } = render(<Header />)
    const header = getByAltText('Logo ToDo')
    expect(header).toBeInTheDocument()
  })
})
