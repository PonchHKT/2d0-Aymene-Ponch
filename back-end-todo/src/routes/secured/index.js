import { Router } from 'express'
import user from './user'
import task from './task'

const api = Router()

api.use('/user', user)
api.use('/task', task)

export default api