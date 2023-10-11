const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'neema',
  database: 'hotel_reservation',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/search-rooms', (req, res) => {
    const { checkInDate, checkOutDate, roomType, occupancy } = req.body;
  
    const query = `
      SELECT * FROM rooms 
      WHERE availability = 1 
      AND room_type = ? 
      AND occupancy >= ? 
      AND id NOT IN (
        SELECT room_id 
        FROM reservations 
        WHERE check_in_date <= ? 
        AND check_out_date >= ?
      )
    `;
  
    connection.query(query, [roomType, occupancy, checkOutDate, checkInDate], (err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json(results);
    });
  });
  