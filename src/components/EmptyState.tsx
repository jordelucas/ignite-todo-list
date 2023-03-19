import clipboardIcon from '../assets/clipboard-icon.svg'

import styles from './EmptyState.module.css'

export const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <img src={clipboardIcon} />

      <h4>Você ainda não tem tarefas cadastradas</h4>
      <h5>Crie tarefas e organize seus itens a fazer</h5>
    </div>
  )
}