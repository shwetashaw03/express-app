//Importing file
import express from 'express'
import todoRouter from './routers/todo.js'
import projectRouter from './routers/project.js'


//Variable
const app = express()
const port = 3000


//Set view Template
app.set('view engine', 'ejs')


//Use functions/Middleware
app.use(logger)


//Public/Static Files
app.use(express.static('public'))


// Api
app.get(`/`, (req, res) => {
    // res.send('Hello World!')
    res.render('index', { text: 'Data Here'})
})

app.use(`/todos`, todoRouter)
app.use(`/projects`, projectRouter)


//listening to port
app.listen(port, ()=>{
    console.log(`App listening on port: http://localhost:${port}`)
})


//middleware
function logger(req, res, next){
    console.log(`${req.method}: http://localhost:${port}${req.originalUrl}`)
    next()
}