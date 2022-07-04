//hooks
import { useState } from 'react'

//css
import styles from './Home.module.css'


export const Home = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")

    const user = {
      login,
      password,
      confirmPassword
    }

    if(confirmPassword !== password){
      setError("As senhas precisam ser iguais!")
      return
    }

    console.log(user)
  }
  
  return (  
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder='Usuário' value={login} onChange={(e) => setLogin(e.target.value)}/>
          <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type="password" placeholder='Confirmar senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <input type="submit" value="Enviar" className={styles.btn}/>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  )
}
