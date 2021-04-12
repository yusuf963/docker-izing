const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('this  server is up and running 🚀🚀🚀. as I have managed to build a webhook to catch any change in my server and auto deploy(continuous deployment) this is v2'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('my app is running on port 3000')
})