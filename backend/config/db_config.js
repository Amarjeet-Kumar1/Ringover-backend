module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'New@12345',
  DB: 'testdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idea: 10000,
  },
};
