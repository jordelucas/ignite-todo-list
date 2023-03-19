import styles from './TaskListInfo.module.css'

export const TaskListInfo = () => {
  return (
    <header className={styles.container}>
      <div>
        <h3 className={styles.description}>Tarefas criadas</h3>
        <span className={styles.quantity}>5</span>
      </div>

      <div>
        <h3 className={styles.description}>Concluídas</h3>
        <span className={styles.quantity}>2 de 5</span>
      </div>
    </header>
  )
}