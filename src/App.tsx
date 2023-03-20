import { useState } from 'react'

import { Header } from './components/Header'
import { TaskType } from './components/Task'
import { TaskList } from './components/TaskList'
import { NewTaskInput } from './components/NewTaskInput'
import { TaskListInfo } from './components/TaskListInfo'

import './globals.css'

import styles from './App.module.css'

const INITIAL_COMPLETED_TASKS_VALUE = 0;

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function onSubmitNewTask(newTask: TaskType) {
    setTasks([...tasks, newTask])
  }

  function onCheckTask(taskId: string){
    const updatedTaskList = tasks.map(task => {
      if(task.id === taskId) {
        return {...task, isComplete: !task.isComplete}
      }

      return task;
    })

    setTasks(updatedTaskList)
  }

  function onDeleteTask(taskId: string){
    const listWithoutDeletedTask = tasks.filter(task => task.id !== taskId)

    setTasks(listWithoutDeletedTask)
  }

  function getCompletedTaksSum(previous: number, current: TaskType): number {
    return current.isComplete ? ++previous : previous;
  }

  const completedTasks = tasks.reduce(
    getCompletedTaksSum,
    INITIAL_COMPLETED_TASKS_VALUE,
  )

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTaskInput onSubmitNewTask={onSubmitNewTask} /> 

        <TaskListInfo
          totalTasks={tasks.length}
          completedTasks={completedTasks}
        />

        <TaskList
          data={tasks}
          onCheckTask={onCheckTask}
          onDeleteTask={onDeleteTask}
        />
      </main>
    </div>
  )
}