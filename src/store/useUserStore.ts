import {create} from 'zustand'
import { UserInfo } from '../types'

type UserState = {
    user: UserInfo
}

export const useUserStore = create<UserState>(() => ({
    user: null,
    
}))