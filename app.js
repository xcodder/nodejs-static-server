const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const public_dir = './public'
app.use(express.static(public_dir))

app.get('/', (req, res) => {
    res.sendFile(public_dir + '/index.html')
})
app.listen(port)
console.log('Server is running on port ' + port + '...' )