const express = require('express');
const app = express();
const port = 3000;
let i = 0

app.get('/', (req, res) => {
  res.send('Hello, express!');
});

app.post('/counter', function (req, res) {
  res.send('Got a POST request');
  i++
})

app.get('/counter', (req, res) => {
  res.send(`${i}`);
});

app.delete('/counter', function (req, res) {
  res.send('Got a DELETE request at /user')
  i = 0
})

app.listen(port, () => console.log(`Server listening on ${port}`));