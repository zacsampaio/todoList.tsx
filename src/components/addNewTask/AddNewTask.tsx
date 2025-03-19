import { PlusCircle } from 'phosphor-react'
import styles from './AddNewTask.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Task {
    id: number,
    textTask: string,
    isCompleted: boolean,
}

interface AddNewTaskProps {
    onAddTask: (task: Task) => void;
}

export function AddNewTask({ onAddTask}: AddNewTaskProps ){
    const [newTextTask, setNewTextTask] = useState('')

    function handleAddNewTask (event: FormEvent){
        event.preventDefault()

        if (newTextTask.trim() === ''){
            return alert('Campo não pode ficar vazio.')
        } 

        const newTask: Task = {
            id: Date.now(),
            textTask: newTextTask,
            isCompleted: false
        }
        
        onAddTask(newTask)
        setNewTextTask('')
    }

    function handleNewTextTask(event: ChangeEvent<HTMLInputElement>){
        setNewTextTask(event.target.value)
    }

    return (
        <div>
            <form 
                className={styles.form}
                onSubmit={handleAddNewTask}
            >
                <input
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTextTask}
                    value={newTextTask}
                />
                <button type='submit' className={styles.addTask}>
                    Criar <PlusCircle size={20}/>
                </button>
            </form>
        </div>
    )
}