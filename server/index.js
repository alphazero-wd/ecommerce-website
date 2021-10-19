require('dotenv').config();
require('./database/db')();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Products API');
});

// routes and custom middlewares
app.use('/api/products', require('./routes/products'));
app.use('/api/user', require('./routes/user'));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
