import { StateCreator } from "zustand"
import { UserInfo } from "../types"
import { getRol } from "../services"
import { User } from "firebase/auth"

export type UserSliceType = {
    user: UserInfo | null
    addRoltoUser: (user: User) => void
    setUser: (user: UserInfo | null) => void
}

export const createUserSlice: StateCreator<UserSliceType> = (set) => ({
    user: null,
    setUser: (user: UserInfo | null) => set({ user }),
    addRoltoUser: (user: User) => {
        getRol(user.uid).then(rol => {
            const userData = {
                uid: user.uid,
                email: user.email,
                rol: rol
            }
            
            set(() => ({
                user: userData
            }))
        })
    }
})