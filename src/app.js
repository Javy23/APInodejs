import express from "express";
import employeesRoutes from './routes/employees.routes.js'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;