const express = require('express');
const db = require('./infrastructure/db');
const bodyParser = require('body-parser')
const taskRoute = require('./routes/taskRoutes');
const cors = require('cors');
const { createToken, validToken } = require('./middlewares/auth');
const app = express();


const port = 8000;
app.use(cors({origin:"*"}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
// Rota padrão

db.sync()

app.use('/tasks', taskRoute)
app.post('/login', (req, res) => {
    res.send({ token: createToken(req.body) }) //pseudo login
})

app.get('/user', (req, res) => {
    res.send({ msg: validToken(req.headers.authorization.replace("Bearer ", '')) }) //pseudo login
})

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});