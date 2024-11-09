import appfirebase from './firebase/credenciales'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import Home from './layout/Home'
import Login from './layout/Login'
import { useState } from 'react'
import { getRol } from './services'
const auth = getAuth(appfirebase)

type UsuarioInfo = {
  uid: string,
  email: string | null,
  rol: string
}

function App() {

  const[user, setUser] = useState<UsuarioInfo | null>(null)

  function setUserWithFirebaseAndRol(user: User) {
    getRol(user.uid).then((rol) => {
      const userData = {
        uid: user.uid,
        email: user.email,
        rol: rol
      }
      setUser(userData)
      console.log(userData);
      
    })
  }

  onAuthStateChanged(auth, (userfire) => {
    if(userfire) {
      if(!user){
        setUserWithFirebaseAndRol(userfire)
      }
    }else {
      setUser(null)
      console.log('No user is signed in.')
    }
  })

  return (
    <>
      <div>
        {
          user? (
            <Home/>
          ) : (
            <Login/>
          )
        }
      </div>
    </>
  )
}

export default App
