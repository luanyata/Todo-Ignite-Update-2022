import { Button } from './Button'
import { Input } from './Input'
import styles from './Search.module.css'

export function Search() {
  return (
    <div className={styles.search}>
      <Input />
      <Button />
    </div>
  )
}
