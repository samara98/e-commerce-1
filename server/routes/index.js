const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const cartsRouter = require('./carts');
const transactionsRouter = require('./transactions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);
router.use("/carts", cartsRouter);
router.use("/transactions", transactionsRouter);

module.exports = router;
