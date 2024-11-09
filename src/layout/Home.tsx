
import firebaseapp from '../firebase/credenciales'
import {getAuth, signOut} from 'firebase/auth'
import { useAppStore } from '../stores/useAppStore'
const auth = getAuth(firebaseapp)


export default function Home() {
    const user = useAppStore(state => state.user)
    return (
        <div>Home
            {user?.rol === 'admin' ? <p>Bienvenido Administrador</p> : <p>Bienvenido Usuario</p>}
            <button onClick={()=>signOut(auth)}>Cerrar sesion</button>
        </div>
    )
}
