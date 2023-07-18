const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

connectToMongo();


app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth',require('./routes/auth'));


app.listen(port, () => {
  console.log(`Social Parivartan is listening on port ${port}`)
})

