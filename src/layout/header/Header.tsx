import toDoLogo from '../../assets/toDoLogo.svg'
import styles from './Header.module.css'

export function Header(){

    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt='Logotipo ToDo List' />
            <div className={styles.todo}>
                <h1 className={styles.to}>to</h1>
                <h1 className={styles.do}>do</h1>
            </div>
        </header>
    )
}