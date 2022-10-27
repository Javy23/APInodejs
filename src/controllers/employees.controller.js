import { db } from "../db.js";

export const getEmployees = async (req, res) => {

    try {

        const [rows] = await db.query('SELECT * FROM employee')
    res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            massage: 'Something goes wrong'
        })
    }
}

export const getEmployee = async (req, res) => {

    try {

        const [rows] = await db.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        
        if(rows.length <=0) return res.status(404).json({
            message: 'Employee not found'
        })
    
        res.json(rows[0])

    } catch (error) {
        
        return res.status(500).json({
            massage: 'Something goes wrong'
        })
    }
}

export const createEmployees = async (req, res) => {

    const {name, salary} = req.body

    try {

        const [rows] = await db.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary])
        res.send({
        id: rows.insertId,
        name,
        salary,
    })
        
    } catch (error) {
        return res.status(500).json({
            massage: 'Something goes wrong'
        })
    }
    
}


export const updateEmployees = async (req, res) => {

    const {id} = req.params
    const {name, salary} = req.body

    try {

        const [result] = await db.query('UPDATE employee SET name = IFNULL(?, name), salary = IFUNLL(?, salary) WHERE id = ?', [name, salary, id])

        if(result.affectedRows <= 0 ) return res.status(404).json({
    
            massage: 'Employee not found '
        })
    
        res.send('Employee update')
        
    } catch (error) {
        return res.status(500).json({
            massage: 'Something goes wrong'
        })
    }


}

export const deleteEmployees = async (req, res) => {

    try {

        const [result] = await db.query('DELETE FROM employee WHERE id = ?', [req.params.id])

        if(result.affectedRows <= 0 ) return res.status(404).json({
     
         massage: 'Employee not found '
        })
     
        res.sendStatus(204)
        
    } catch (error) {
        return res.status(500).json({
            massage: 'Something goes wrong'
        })
    }


}