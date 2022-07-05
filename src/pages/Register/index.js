//hooks
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

//css
import styles from './Register.module.css'


export const Register = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      login,
      password,
      confirmPassword
    }

    if(confirmPassword !== password){
      setError("As senhas precisam ser iguais!")
      return
    }

    const res = await createUser(user)

    console.log(user)
    console.log(res) 
  }

  useEffect(() => {
    if (authError){
      setError(authError);
    }
  }, [authError])
  
  return (  
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder='Usuário' value={login} onChange={(e) => setLogin(e.target.value)} required/>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <input type="password" placeholder='Confirmar senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
          {!loading ? <input type="submit" value="Enviar" className={styles.btn}/> : <input type="submit" value="Aguarde..." className={styles.btn} disabled/>}
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  )
}
