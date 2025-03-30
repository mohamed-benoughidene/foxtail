const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
const businessNameRoutes = require('./routes/businessNameRoutes'); // Import the router
app.use('/api', businessNameRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});