const db = require('../models');
const Product = db.products;
const Op = db.Op;

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
    const rating = req.query.rating;
    const product = await Product.findByPk(id);
    if (product) {
      const newNumReviews = product.numReviews + 1;
      const newRating =
        (product.rating * product.numReviews + +rating) / newNumReviews;

      product.rating = newRating;
      product.numReviews = newNumReviews;
      await product.save();
      res.send({ message: 'rating added', id: id });
    } else {
      res.status(400).send({ message: "product doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'error in updating review' });
  }
};

exports.filter = async (req, res) => {
  try {
    const costLower = req.query.costLower;
    const costUpper = req.query.costUpper;
    const type = req.query.type;
    var options;
    if (type === 'all') {
      options = {
        price: {
          [Op.and]: {
            [Op.gte]: costLower,
            [Op.lte]: costUpper,
          },
        },
      };
    } else {
      options = {
        price: {
          [Op.and]: {
            [Op.gte]: costLower,
            [Op.lte]: costUpper,
          },
        },
        type: {
          [Op.like]: `%${type}%`,
        },
      };
    }

    const products = await Product.findAll({ where: options });
    res.send(products);
  } catch (error) {
    res.status(500).send({ message: 'error in filtering' });
  }
};
