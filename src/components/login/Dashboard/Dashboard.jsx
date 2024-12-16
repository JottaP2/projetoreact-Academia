import React from 'react';
import styles from "./Dashboard.module.css";

export function Dashboard() {
    return (
        <header className={styles.nav}>
            <img className={styles.cover}
             src="./src/assets/Group 1.svg" alt="" />
            <a href="#">Cadrasto de Aluno</a>
            <a href="#">Lista de Alunos</a>
            <a href="#">Pagamentos</a>
            <button type='submit' className={styles.btn} rounded="true" >Logout</button>
        </header>

    );
}
