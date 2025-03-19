import { ClipboardText } from "phosphor-react"
import styles from "./NotTasks.module.css"


export function NotTasks(){

    return (
        <div className={styles.notTasks}>
            <ClipboardText size={70} weight="thin"/>
            <p className={styles.firstP}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p> 
        </div>
    )
}