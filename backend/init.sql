-- init.sql
DROP TABLE IF EXISTS quick_links;
CREATE TABLE quick_links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  url TEXT
);

INSERT INTO quick_links (title, url) VALUES
('Kampanya 1', '#'),
('Kampanya 2', '#'),
('Kampanya 3', '#'),
('Kampanya 4', '#'),
('Kampanya 5', '#'),
('Kampanya 6', '#'),
('Kampanya 7', '#'),
('Kampanya 8', '#');

-- slider_items
DROP TABLE IF EXISTS slider_items;
CREATE TABLE slider_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  image_url TEXT
);

-- products
DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  category TEXT,
  price REAL,
  rating INTEGER,
  image_url TEXT
);
