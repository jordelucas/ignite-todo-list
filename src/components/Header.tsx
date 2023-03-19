import todoListLogo from '../assets/todo-list-logo.svg'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoListLogo} alt="Logotipo do Todo List" />
    </header>
  )
}