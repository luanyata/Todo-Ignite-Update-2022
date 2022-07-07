import { render } from '@testing-library/react'
import { EmptyTasks } from '.'

describe('EmptyTask Component', () => {
  test('Renders empty task correctly', () => {
    const { getByText } = render(<EmptyTasks />)
    const emptyMessage = getByText('Você ainda não tem tarefas cadastradas')
    const emptyMessage2 = getByText(
      'Crie tarefas e organize seus itens a fazer',
    )
    expect(emptyMessage).toBeInTheDocument()
    expect(emptyMessage2).toBeInTheDocument()
  })
})
