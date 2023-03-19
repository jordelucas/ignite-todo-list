import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { NewTaskInput } from './components/NewTaskInput'
import { TaskListInfo } from './components/TaskListInfo'

import './globals.css'

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTaskInput /> 

        <TaskListInfo />

        <TaskList />
      </main>
    </div>
  )
}