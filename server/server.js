const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 8000;

const pool = new Pool({
  user: 'ukwrqzev4tb4qmsvjsgl',
  host: 'lbqrgkc6r4ysqgsspyobw-postgresql.services.clever-cloud.com',
  password: 'bW5OBN2lMH22UWXynf6S76gAGW9XFe',
  database: 'bqrgkc6r4ysqgsspyobw',
  port:50013,
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const query = "SELECT * FROM users;";
    const result = await pool.query(query);
    if (username === result.rows[0].f_name && password === result.rows[0].pass) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

// Booking endpoint
app.post('/book', async (req, res) => {
  const { name, people, date, time, mobile } = req.body;

  if (people < 1) {
    return res.status(400).json({ error: 'Number of people must be at least 1' });
  }

  try {
    const query = 'INSERT INTO bookings (name, people, date, time, mobile) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(query, [name, people, date, time, mobile]);
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'An error occurred while creating the booking', details: error.message });
  }
});

// Fetch bookings
app.get('/bookings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'An error occurred while fetching bookings' });
  }
});

// Add item to cart
app.post('/cart', async (req, res) => {
  const { item_name, quantity, price, img } = req.body;
  try {
    const query = 'INSERT INTO cart (item_name, quantity, price, img) VALUES ($1, $2, $3, $4) RETURNING *';
    const result = await pool.query(query, [item_name, quantity, price, img]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'An error occurred while adding item to cart', details: error.message });
  }
});

// Fetch cart items
app.get('/cart', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cart');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'An error occurred while fetching cart items' });
  }
});

// Remove item from cart
app.delete('/cart/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM cart WHERE id = $1';
    await pool.query(query, [id]);
    res.status(204).end();
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ error: 'An error occurred while removing item from cart' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
