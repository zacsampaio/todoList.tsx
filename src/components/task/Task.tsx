import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from './Task.module.css'

interface TaskProps {
    id: number,
    textTask: string,
    isCompleted: boolean,
    onDelete: (id: number) => void,
    onComplete: (id: number) => void,
}


export function Task({ id, textTask, isCompleted, onDelete, onComplete }: TaskProps){
    return (
        <div data-id={id} className={isCompleted ? styles.completed : styles.task } >
            <button
                className={styles.completedButton}
                onClick={() => onComplete(id)}
            >
                {isCompleted 
                    ? <CheckCircle size={'1.5rem'} className={styles.completedCheck}/>
                    : <Circle size={'1.5rem'} className={styles.notCompletedCheck}/>
                }
            </button>
            <p>{textTask}</p>
            <button className={styles.deleteButton} ><Trash size={'2rem'} onClick={() => onDelete(id)}/></button>
        </div>
    )
}