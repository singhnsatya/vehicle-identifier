var express = require('express');
var app = express();
var port = process.env.PORT || 3030;

app.use(express.static('./src'))

app.get('/', (req, res) => {
	res.send('Welcome')
})

app.listen(port, () => {
	console.log("Listening at port "+port);
})

