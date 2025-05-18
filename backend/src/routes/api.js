const express = require('express');
const router = express.Router();

const {
  getQuickLinks,
  getSliderItems,
  getElectronics,
  getRecommendations,
  getProductById,
} = require('../controllers/productController');

router.get('/quick-links', getQuickLinks);
router.get('/slider', getSliderItems);
router.get('/products/electronics', getElectronics);
router.get('/products/recommendations', getRecommendations);
router.get('/product/:id', getProductById);

module.exports = router;
