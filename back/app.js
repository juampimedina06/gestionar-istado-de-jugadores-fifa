const express = require('express')
const app = express()
const port = 8080;
const { initDb } = require('../back/src/config/dbConfig')

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.json());

app.listen(port, async () => {
    await initDb();
    console.log(`Escuchando peticiones en el puerto: ${port}!`)
})
