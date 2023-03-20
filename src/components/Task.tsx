import { Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'

export type TaskType = {
  id: string,
  title: string,
  isComplete: boolean,
}

interface TaskProps {
  content: TaskType,
  onCheckTask: (id: string) => void,
  onDeleteTask: (id: string) => void,
}

export const Task = ({ content, onCheckTask, onDeleteTask }: TaskProps) => {
  function handleCheckTask() {
    onCheckTask(content.id)
  }

  function handleDeleteTask() {
    onDeleteTask(content.id)
  }

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={content.isComplete}
        onChange={handleCheckTask}
      />

      <p className={content.isComplete ? styles.strikethroughText : ''}>
        {content.title}
      </p>
      
      <button title='Deletar tarefa' onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}