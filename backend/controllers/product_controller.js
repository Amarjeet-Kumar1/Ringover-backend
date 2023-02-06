const db = require('../models');
const Product = db.products;
const Op = db.Op;

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
    res.send(newProduct.toJSON());
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || 'error while creating product' });
  }
};

exports.findAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || 'error in sending products' });
  }
};

exports.findProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const product = await Product.findByPk(id);
    if (product) {
      res.send(product);
    } else {
      res.status(400).send({ message: 'cannot find product' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error in finding product' });
  }
};

exports.addRating = async (req, res) => {
  try {
    const id = req.query.id;
    const newRating = req.query.rating;
    const product = await Product.findByPk(id);
    if (product) {
      const rating =
        (product.rating * product.numReviews + newRating) /
        (product.numReviews + 1);
      product.rating = rating;
      product.numReviews = product.numReviews + 1;
      await product.save();
      res.send(product);
    } else {
      res.status(400).send({ message: "product doesn't exist" });
    }
  } catch (err) {
    res.status(500).send({ message: 'error in updating review' });
  }
};

exports.filter = async (req, res) => {
  try {
  } catch (error) {}
};
