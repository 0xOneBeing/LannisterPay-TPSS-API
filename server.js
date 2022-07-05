const express = require('express')

const app = express()

const hostname = "127.0.0.1"
const port = 8000

require('./routes')(app, {})
app.listen(port, () => {
    console.log("Server live on http://" + hostname + ":" + port + "/")
})
