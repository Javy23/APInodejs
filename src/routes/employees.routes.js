import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee } from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)

router.patch('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployees)



// router.get('/ping', async (req, res) => {
//     const [result] = await db.query('SELECT 1+1 AS result')
//     res.json(result[0])
// });


export default router