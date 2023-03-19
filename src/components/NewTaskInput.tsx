import { PlusCircle } from '@phosphor-icons/react'

import styles from './NewTaskInput.module.css'

export const NewTaskInput = () => {
  return (
    <form className={styles.container}>
      <input type="text" placeholder='Adicione uma nova tarefa' />

      <button title='Criar tarefa' type='submit'>
        Criar
        <PlusCircle fontSize={20} weight='bold' />
      </button>
    </form>
  )
}