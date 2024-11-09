import appfirebase from '../firebase/credenciales'
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'
const auth = getAuth(appfirebase)

// TODO: Registrar un nuevo usuario a la base de datos

export async function registrarUsuario(email:string, password:string, rol:string) {
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return userCredential
        })
    console.log(infoUsuario) 
    const docuRef = doc(getFirestore(appfirebase), `Users/${infoUsuario.user.uid}`)
    await setDoc(docuRef, {correo: email, rol: rol})
} 

// TODO: Obtener el rol de un usuario de la base de datos

export async function getRol(uid: string) {
    const docRef = doc(getFirestore(appfirebase), `Users/${uid}`)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data().rol
    } else {
        return null
    }
}