require('dotenv').config();
require('./database/db')();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('Products API');
});
app.use('/api/products', require('./routes/products'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
