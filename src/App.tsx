import './App.module.css'
import './global.css'
import { Header } from './layout/header/Header'
import { Main } from './layout/main/Main'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <main className={styles.taskArea}>
          <Main />
      </main>
    </div>
  )
}

export default App
