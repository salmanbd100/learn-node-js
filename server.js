const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => {
  // console.log(`server is runnig ${PORT}`)
});

let user =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

console.log(user.isAdmin);
