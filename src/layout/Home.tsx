
import firebaseapp from '../firebase/credenciales'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(firebaseapp)


export default function Home() {
    return (
        <div>Home
            <button onClick={() => signOut(auth)}>Cerrar sesion</button>
        </div>
    )
}
