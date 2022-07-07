import { render } from '@testing-library/react'
import { Input } from '.'

describe('Input Component', () => {
  test('Renders input correctly', () => {
    const onChange = jest.fn()

    const { getByPlaceholderText } = render(
      <Input text="" onChange={onChange} />,
    )
    const input = getByPlaceholderText('Adicione uma nova tarefa')
    expect(input).toBeInTheDocument()
  })

  test('Renders input with text correctly', () => {
    const onChange = jest.fn()

    const { getByPlaceholderText } = render(
      <Input text="Google" onChange={onChange} />,
    )
    const input = getByPlaceholderText('Adicione uma nova tarefa')
    expect(input).toHaveValue('Google')
  })
})
