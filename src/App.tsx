import appfirebase from './firebase/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './layout/Home'
import Login from './layout/Login'
import { useState } from 'react'
const auth = getAuth(appfirebase)

function App() {

  const[user, setUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if(user) {
      setUser(user)
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
