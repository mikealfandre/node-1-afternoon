const express = require('express')
const bodyParser = require('body-parser')
const mController = require('./Controllers/messages_controller')

const app = express()
app.use(bodyParser.json());
app.use(express.static(_dirname + '/../public/build'))



app.get('/api/messages', mController.read)

app.post('/api/messages', mController.create)

app.put('/api/messages/:id', mController.update)

app.delete('/api/messages/:id', mController.delete)


const port = 3001;
app.listen(port, () => { console.log(`We are listening ${port}.`) } );

