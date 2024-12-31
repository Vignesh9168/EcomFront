const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // For handling CORS issues

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdfghjkl',
  database: 'mydb'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Endpoint to handle form submission
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  connection.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json({ message: 'User registered successfully', userId: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

