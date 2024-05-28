const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    // Get all users from the database
    const users = db.query('SELECT * FROM users');
    res.send(users);
  });

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
