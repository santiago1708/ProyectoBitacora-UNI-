import {create} from 'zustand'
import {createUserSlice, UserSliceType} from './UserSlice'

export const useAppStore = create<UserSliceType>((...a) => ({
    ...createUserSlice(...a)
}))