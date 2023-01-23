require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const userName  = process.env.USER_NAME || 'World';
  // res.send(`<h1>Hello ${userName} !</h1>`);
  res.json( {data})
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});