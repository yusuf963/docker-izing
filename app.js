const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('My app is running!!'))

app.listen(3000, () => {
  console.log('my app is running on port 3000')
})