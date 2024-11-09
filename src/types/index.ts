import {z} from 'zod'
import {UserInfoSchema, UsuarioSchema} from '../schemas/user-schema'

export type Usuario = z.infer<typeof UsuarioSchema>
export type UserInfo = z.infer<typeof UserInfoSchema>