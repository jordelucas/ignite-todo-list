import styles from './TaskListInfo.module.css'

interface TaskListInfoProps {
  completedTasks: number,
  totalTasks: number
}

export const TaskListInfo = ({
  completedTasks,
  totalTasks,
 }: TaskListInfoProps) => {
  return (
    <header className={styles.container}>
      <div>
        <h3 className={styles.description}>Tarefas criadas</h3>
        <span className={styles.quantity}>{totalTasks}</span>
      </div>

      <div>
        <h3 className={styles.description}>Concluídas</h3>
        <span className={styles.quantity}>
          {completedTasks} de {totalTasks}
        </span>
      </div>
    </header>
  )
}