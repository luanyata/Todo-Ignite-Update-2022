import { Button } from './Button'
import { Input } from './Input'
import styles from './Search.module.css'

type SearchProps = {
  onCreate: (text: string) => void
  onSave: () => void
  text: string
}

export function Search({ text, onCreate, onSave }: SearchProps) {
  const handleCreateTask = (text: string) => {
    onCreate(text)
  }

  const handleSave = () => {
    onSave()
  }

  return (
    <div className={styles.search}>
      <Input onCreate={handleCreateTask} text={text} />
      <Button onSave={handleSave} />
    </div>
  )
}
