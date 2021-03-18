import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes'
import './middlewares/passport'
import { PrismaClient} from '@prisma/client'

const server = async () => {
    try {
        const app = express()
        dotenv.config()

        app.use(cors())
        app.use(express.json())
        app.use(express.urlencoded({extended : true}))
        app.use('/api', routes)

        const prisma = new PrismaClient()
        await prisma.$connect()

        const port = process.env.PORT || 3000

        app.listen(port, () => console.log(`server is running on port ${port}`))
    } catch (err) {
        console.log(err)
    }
}
server()
