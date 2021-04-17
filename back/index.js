const express = require('express')
const cors = require('cors')
const app = express()

const port = 5000

const { Statement } = require('./models')

app.use(cors())
app.use(express.json())

//простой тест сервера
app.get('/ping', (req, res) => res.send('pong'));


app.post('/api/statement', async (req, res) => {
	try {
		const { body } = req
		console.log(body);

		const data = await Statement.create(body)

		res.status(200).send({ message: 'ok' })
	} catch (err) {
		res.status(500).send({ err })
	}
})

app.get('/api/statement', async (req, res) => {
	try {
		const statements = await Statement.findAll()
		res.send({ data: statements })
	} catch (err) {

	}
})



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);