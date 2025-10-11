const express = require('express')
const app = express()
const port = 8080;
const { initDb } = require('../back/src/config/dbConfig')
require('dotenv').config();

const playerRouter = require('./src/routes')
const authRouter = require('./src/routes/authRoutes');

app.use(express.json());
app.use('/player', playerRouter);
app.use('/auth', authRouter);

app.listen(port, async () => {
    await initDb();
    console.log(`Escuchando peticiones en el puerto: ${port}!`)
})
