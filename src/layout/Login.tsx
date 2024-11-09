import { FormEvent, useState } from "react"
import { registrarUsuario } from "../services"


export default function Login() {

    const [isRegister, setIsRegister] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement

        const email = form.email.value
        const password = form.password.value
        const rol = form.rol.value


        if(isRegister) {
            registrarUsuario(email, password, rol)
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
                <label >
                    Rol
                    <select id="rol">
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario</option>
                    </select>
                </label>

                <input type="submit" value={isRegister ? 'Registrar': 'Iniciar Sesion'}/>
            </form>

            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Regresar a Inicio de Sesion': 'Crear Cuenta'}
            </button>
        </div>
    )
}
