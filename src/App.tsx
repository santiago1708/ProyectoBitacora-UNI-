import appfirebase from './firebase/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './layout/Home'
import Login from './layout/Login'
import { useAppStore } from './stores/useAppStore'
const auth = getAuth(appfirebase)

function App() {

  const user = useAppStore(state => state.user)
  const setUser = useAppStore(state => state.setUser)
  const addRoltoUser = useAppStore(state => state.addRoltoUser)
  
  onAuthStateChanged(auth, (userfire) => {
    if(userfire) {
      if(!user){
        addRoltoUser(userfire)
      }
    }else {
      setUser(null)
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
