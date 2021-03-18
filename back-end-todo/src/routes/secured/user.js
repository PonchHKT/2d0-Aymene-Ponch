import { Router } from 'express'
import { PrismaClient} from '@prisma/client'
const api = Router()

api.get('/:id', async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    if(!user) return res.status(404).send(`the user with the given id was not found`)
    res.json(user)
    } catch (error) {
        console.log(error)
    }
})

module.exports = api