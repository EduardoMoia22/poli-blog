//hooks
import { useState } from "react";

//css
import styles from './Login.module.css'

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")

    const user = {
      login,
      password
    }

    console.log(user)
  }
  
  return (  
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder='Usuário' value={login} onChange={(e) => setLogin(e.target.value)}/>
          <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type="submit" value="Enviar" className={styles.btn}/>
        </form>
      </div>
    </div>
  )
}
