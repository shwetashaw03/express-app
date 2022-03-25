import express from 'express'
import data from "../data/todo.js";

const router = express.Router() 

router.get('/', (req, res) => {
    res.json(data)
})


router.get('/:id', (req, res) => {
    var val = data.filter(x => x.id == req.params.id)
    res.json(val)
})

export default router