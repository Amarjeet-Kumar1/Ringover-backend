const auth = require('../utils.js');
const db = require('../models');
const Product = db.products;
const Op = db.Op;
exports.createSession = (req, res) => {
  if (
    req.body.email === process.env.ADMIN_EMAIL &&
    req.body.password === process.env.ADMIN_PASSWORD
  ) {
    const admin = {
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
    };
    res.send({ token: auth.generateToken(admin) });
  } else {
    res.send(402).send({ message: 'unauthorized' });
  }
};

exports.create = async (req, res) => {
  try {
    const product = {
      name: req.body.name,
      price: req.body.price,
      rating: req.body.rating ? req.body.rating : 0,
      numReviews: req.body.numReviews ? req.body.numReviews : 0,
      type: req.body.type,
      imgUrl: req.body.imgUrl,
    };
    const newProduct = await Product.create(product);
    res.send({ product: newProduct.toJSON(), message: 'product created' });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || 'error while creating product' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const num = await Product.destroy({
      where: {
        id: id,
      },
    });
    if (num === 1) {
      res.send({ message: 'deleted a product', id: id });
    } else {
      res.status(400).send({ message: 'error in deleting a product' });
    }
  } catch (err) {
    res.status(500).send({ message: 'error in deleting a product' });
  }
};
