const jwt = require('jsonwebtoken');
exports.isAdmin = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); //bearer token
    jwt.verify(token, process.env.JWT_SECRET, (err, docode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.admin = docode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};
exports.generateToken = (admin) => {
  return jwt.sign(
    {
      name: admin.name,
      email: admin.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
};
