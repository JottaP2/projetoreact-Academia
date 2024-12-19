import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Dashboard.module.css";


export function Dashboard() {
        const navigate = useNavigate();

        const handleLogout = () => {

        navigate("/");
    };

    return (


        <main className={styles.dash}>
        <header className={styles.nav}>
            <img className={styles.cover}
             src="./src/assets/Group 1.svg" alt="" />
            <a href="#">Cadrasto de Aluno</a>
            <a href="#">Lista de Alunos</a>
            <a href="#">Pagamentos</a>
            <button className={styles.btn} rounded="true" onClick={handleLogout} >Logout</button>
        </header>
        </main>

    );
}
