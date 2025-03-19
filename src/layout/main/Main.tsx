
import { useState } from 'react';
import { AddNewTask } from '../../components/addNewTask/AddNewTask';
import { Task } from '../../components/task/Task'
import styles from './Main.module.css'
import { NotTasks } from '../../components/notTasks/NotTasks';

// const tasks  = [
//     {
//         id: 1,
//         textTask: 'Limpar a casa',
//         isCompleted: false,
//     },
//     {
//         id: 2,
//         textTask: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//         isCompleted: false,
//     },
//     {
//         id: 3,
//         textTask: 'Estudar',
//         isCompleted: true,
//     },

// ]

interface Task {
    id: number;
    textTask: string;
    isCompleted: boolean;
}

export function Main(){
    const [tasks, setTask] = useState<Task[]>([])

    function handleAddTask(newTask: Task){
        setTask([...tasks, newTask])
    }

    function handleDeleteTask(taskId: number){
        setTask(tasks.filter(task => task.id !== taskId))
    }

    function handleCompleteTask (taskId: number){
        setTask(tasks.map(task => 
            task.id === taskId
                ? {...task, isCompleted: !task.isCompleted}
                : task
        ))
    }

    const totalCompleted = tasks.reduce((acc, task) => acc + (task.isCompleted ? 1 : 0), 0)

    return (
        <article className={styles.taskArea}>
            <AddNewTask onAddTask={handleAddTask} />
            <header className={styles.header}>
                <div className={styles.createdTasks}>
                    Tarefas criadas <span>{tasks.length}</span>
                </div>

                <div className={styles.completedTasks}>
                    Concluídas {tasks.length === 0 ? <span>{tasks.length}</span> : <span>{totalCompleted} de {tasks.length}</span> }
                </div>
            </header>
            <main>
                {tasks.length === 0
                    ? <NotTasks />
                    : tasks.map(task => {
                        return (
                            <Task 
                                key={task.id}
                                id={task.id}
                                textTask={task.textTask}
                                isCompleted={task.isCompleted}
                                onDelete={handleDeleteTask}
                                onComplete={handleCompleteTask}
                            />
                        )
                       })
                }
               
            </main>
        </article>
    )
}