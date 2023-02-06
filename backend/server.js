const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5050;
var corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync().then(() => {
  console.log(' re-sync db');
});

app.get('/api', async (req, res) => {
  res.json({ message: 'connected' });
});

app.use(express.static(path.join(__dirname, '..', 'frontend/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend/build/index.html'));
});
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
