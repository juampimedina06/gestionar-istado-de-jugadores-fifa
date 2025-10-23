const express = require('express')
const app = express()
const port = 8080;
const { initDb } = require('../back/src/config/dbConfig')
require('dotenv').config();

const { playerRouter, authRouter } = require('./src/routes');

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(express.json());
app.use('/player', playerRouter);
app.use('/login', authRouter);

app.listen(port, async () => {
    await initDb();
    console.log(`Escuchando peticiones en el puerto: ${port}!`)
})
