import { useState, FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from '@phosphor-icons/react'

import { TaskType } from './Task'

import styles from './NewTaskInput.module.css'

interface NewTaskInputProps {
  onSubmitNewTask: (item: TaskType) => void
}

export const NewTaskInput = ({ onSubmitNewTask }: NewTaskInputProps) => {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const newTask: TaskType = {
      id: uuidv4(),
      isComplete: false,
      title,
    }

    setTitle('')
    onSubmitNewTask(newTask)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        placeholder='Adicione uma nova tarefa'
        onChange={e => setTitle(e.target.value)}
      />

      <button title='Criar tarefa' type='submit'>
        Criar
        <PlusCircle fontSize={20} weight='bold' />
      </button>
    </form>
  )
}