import { FormEvent, useState } from "react"
import { registrarUsuario } from "../services"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import appfirebase from '../firebase/credenciales'
const auth = getAuth(appfirebase)

export default function Login() {

    const [isRegister, setIsRegister] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement

        const email = form.email.value
        const password = form.password.value
        
        if(isRegister) {
            const rol = form.rol.value
            registrarUsuario(email, password, rol)
        }else {
            signInWithEmailAndPassword(auth, email, password)
        }
    }

    return (
        <div>
            <h1>{isRegister ? 'Registrate': 'Iniciar Sesion'}</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    Correo Electronico
                    <input type="email" autoComplete="username" id="email"/>
                </label>
                <label >
                    Contraseña
                    <input type="password" autoComplete="current-password"id="password"/>
                </label>
                {
                    isRegister && (
                        <label >
                            Rol
                            <select id="rol">
                                <option value="admin">Administrador</option>
                                <option value="user">Usuario</option>
                            </select>
                        </label>
                    )
                }
                <input className="cursor-pointer" type="submit" value={isRegister ? 'Registrar': 'Iniciar Sesion'}/>
            </form>

            <button  onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Regresar a Inicio de Sesion': 'Crear Cuenta'}
            </button>
        </div>
    )
}
