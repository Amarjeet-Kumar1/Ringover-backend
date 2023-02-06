const express = require('express');
const cors = require('cors');
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

app.get('/', async (req, res) => {
  res.json({ message: results });
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
