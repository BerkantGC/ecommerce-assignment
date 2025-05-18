const db = require('../db');

const getQuickLinks = (req, res) => {
  db.all('SELECT * FROM quick_links', [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

const getSliderItems = (req, res) => {
  db.all('SELECT * FROM slider_items', [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

const getElectronics = (req, res) => {
  db.all("SELECT * FROM products WHERE category = 'electronics'", [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

const getRecommendations = (req, res) => {
  db.all("SELECT * FROM products WHERE category = 'recommendation'", [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).send(err.message);
    res.json(row);
  });
};

module.exports = {
  getQuickLinks,
  getSliderItems,
  getElectronics,
  getRecommendations,
  getProductById
};
