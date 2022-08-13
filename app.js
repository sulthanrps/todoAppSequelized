const express = require('express')
const route = require('./Routes/index')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))
app.use(route)

app.listen(port, () => {
    console.log("this project is running on port " + port)
})