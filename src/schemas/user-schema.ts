import {z} from 'zod'

export const UsuarioSchema = z.object({
    email: z.string().email(),
    uid: z.string()
})

export const UserInfoSchema = z.object({
    udi: z.string(),
    email: z.string().email().nullable(),
    rol: z.string()
}).nullable()