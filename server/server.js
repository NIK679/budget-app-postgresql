require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Get all transactions
app.get('/api/v1/transactions', async (req, res) => {
  try {
    // const results = await db.query("select * from transactions");
    const transactions = await db.query('select * from transactions;');

    res.status(200).json({
      success: true,
      count: transactions.rows.length,
      data: transactions.rows,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// Create a Transaction

app.post('/api/v1/transactions', async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      'INSERT INTO transactions (type, descn, amt, date) values ($1, $2, $3, $4) returning *',
      [req.body.type, req.body.desc, req.body.amt, req.body.date]
    );
    console.log(results);
    res.status(201).json({
      success: true,
      data: results.rows[0],
    });
  } catch (err) {
    console.log(err);
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// Update transactions

app.put('/api/v1/transactions/:id', async (req, res) => {
  try {
    const results = await db.query(
      'UPDATE transactions SET type = $1, descn = $2, amt = $3, date = $4 where id = $5 returning *',
      [req.body.type, req.body.desc, req.body.amt, req.body.date, req.params.id]
    );

    res.status(200).json({
      success: true,
      data: results.rows[0],
    });
  } catch (err) {
    console.log(err);
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
  console.log(req.params.id);
  console.log(req.body);
});

// Delete Restaurant

app.delete('/api/v1/transactions/:id', async (req, res) => {
  try {
    const results = db.query('DELETE FROM transactions where id = $1', [req.params.id]);
    res.status(204).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
