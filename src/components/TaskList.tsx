import { EmptyState } from "./EmptyState"
import { Task, TaskType } from "./Task"

import styles from './TaskList.module.css'

interface TaskListProps {
  data: TaskType[],
  onCheckTask: (id: string) => void,
  onDeleteTask: (id: string) => void,
}

export const TaskList = ({
  data,
  onCheckTask,
  onDeleteTask,
}: TaskListProps) => {
  const isEmpty = !data.length;

  if(isEmpty) {
    return <EmptyState />  
  }

  return (
    <div className={styles.taskList}>
      {data.map(task => {
        return (
          <Task
            key={task.id}
            content={task}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask}
          />
        )
      })}
    </div>
  )
}