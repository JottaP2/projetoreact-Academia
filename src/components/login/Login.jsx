import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function initialState() {
  return { user: "", password: "" };
}

export function Login() {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  function onChange(evento) {
    const { name, value } = evento.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    if (values.user === "" || values.password === "") {
      alert("Preencha os campos.");
    } else {
      navigate("/dashboard");
    }
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.forms}>
        <img
          className={styles.cover}
          src="./src/assets/Group 1.svg"
          alt="Cover"
        />
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>
          <div className="user-login__form-control">
            <label htmlFor="email"></label>
            <input
              placeholder="Email"
              id="email"
              type="text"
              name="user"
              autoComplete="off"
              onChange={onChange}
              value={values.user}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password"></label>
            <input
              placeholder="Senha"
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
          </div>
          <button className={styles.loginbutton} type="submit"  rounded="true"
          >
            Login
          </button>
        </form>
      </div>
    </aside>
  );
}
