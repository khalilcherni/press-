const express = require('express');
const cors = require('cors');
const home = require('./routes/Home');
const sports = require('./routes/Sports');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(express.json());

app.use('/api/home', home);
app.use('/api/sports',sports)

app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});