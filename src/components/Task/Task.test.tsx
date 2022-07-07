import { render } from '@testing-library/react'
import { Task } from '.'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}))

describe('Task Component', () => {
  test('Renders task correctly', () => {
    const task = {
      id: '1',
      text: 'Google',
      done: false,
    }

    const { getByText } = render(<Task task={task} />)
    const text = getByText('Google')
    console.warn(text)

    expect(text).toBeInTheDocument()
  })
})
