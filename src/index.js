const express = require('express')
require('./db/db')
const port = process.env.PORT || 3000;
const userRouter = require('./routes/userRouter')
const postRouter = require('./routes/postRouter')
const app = express()
const path = require('path')

const viewsDir = path.join(__dirname, '../templates/views')
const publicDir = path.join(__dirname, '../public')

app.set('views', viewsDir);
app.set('view engine', 'ejs')

app.use(express.static(viewsDir))
app.use(express.static(publicDir))
app.use(express.json())
app.use(userRouter)
app.use(postRouter)

app.listen(port , () => {
    console.log(`Server is up on ${port}`)
})
