const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

//здесь наше приложение отдаёт статику
const frontDir = path.join('../', 'front', 'build')
console.log(frontDir);
app.use(express.static(frontDir));

//простой тест сервера
app.get('/ping', (req, res) => res.send('pong'));

app.get('/api', (req, res) => {
	res.send('test api')
})

//обслуживание html
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);