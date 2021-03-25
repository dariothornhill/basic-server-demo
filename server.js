const express = require('express');

const app = express();

app.get('*', handleRequest);

function handleRequest(req, res) {
  console.log(req.query);
  res.send('ok');
}

app.listen(3000, () => {
  console.log('It is listening for connections');
});

