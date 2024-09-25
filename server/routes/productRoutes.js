const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/productController');

// GET all products
router.get('/', product_controller.getProducts);
// POST new product
router.post('/new', product_controller.createProduct);
// GET one product
router.get('/:productId', product_controller.getProductById);
// DELETE product
router.delete('/:productId/delete', product_controller.deleteProduct);
// PUT product (update)
router.put('/:proudctId/update', product_controller.updateProduct);

module.exports = router;