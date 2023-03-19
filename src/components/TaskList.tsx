import { Task } from "./Task"
import { EmptyState } from "./EmptyState"

import styles from './TaskList.module.css'

const isEmpty = false; 

export const TaskList = () => {
  if(isEmpty) {
    return <EmptyState />  
  }

  return (
    <div className={styles.taskList}>
      <Task />
      <Task />
      <Task />
    </div>
  )
}