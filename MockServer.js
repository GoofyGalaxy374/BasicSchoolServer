let express = require('express')

let cors = require('cors')

app = express()
app.use(express.json())
app.use(cors())

let port = 3300

app.get('/', () => {
    console.log('Home page')
})

app.get('/testServer', () => {
    console.log('Local server Works')
})

app.listen(port, () => {
    console.log(`Local server running on port: ${port}`)
})