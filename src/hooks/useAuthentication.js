import { db } from '../firebase/config'

//firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'

//hooks
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  //cleanup
  const [cancelled, setCancelled] = useState(null)

  const auth = getAuth()

  function checkIfIsCancelled () {
    if(cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.login
      })

      return user

    } catch (error) {
        console.log(error.message)
        console.log(typeof error.message)

        let systemErrorMessage

        if(error.message.includes("Password")) {
          systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
        }else if(error.message.includes("email-already")){
          systemErrorMessage = "E-mail já existe."
        }else{
          systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
        }

        setError(systemErrorMessage)
    }

    setLoading(false)
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return{
    auth,
    createUser,
    error,
    loading
  }
}