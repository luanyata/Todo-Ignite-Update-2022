import { Header } from './components/Header'
import { Search } from './components/Search'
import styles from './App.module.css'

import './global.css'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Search />
        <div className={styles.tasks}>
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default App
