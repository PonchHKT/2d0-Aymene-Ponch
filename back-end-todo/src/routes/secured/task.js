import { prisma, PrismaClient } from '@prisma/client'
import { Router } from 'express'
const api = Router()



api.get('/:id', async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const task = await prisma.task.findMany()
        res.json(task)
    } catch (error) {
        console.log(error)
    }
})

api.post('/', async (req, res) => {
    try {
        const { content, isComplete } = req.body
        const prisma = new PrismaClient()
        const task = prisma.task.create({
            data: {
                content,
                isComplete
            }
        })
    } catch (error) {
        console.log(error)
    }
})

api.patch('/:id', async (req, res) => {
    try {
        const { content } = req.body
        const prisma = new PrismaClient()
        const task = await prisma.task.update({
            where: {
                id
            },
            data: {
                content: content
            }
        })
        res.json(task)
    } catch (error) {
        console.log(error)
    }
})

api.delete('/:id', async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const task = await prisma.task.delete({
            where: {
                id
            }
        })
        res.json(task)
    } catch (error) {
        console.log(error)
    }
})

module.exports = api