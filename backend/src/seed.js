const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
  // Quick Links
  db.run('DROP TABLE IF EXISTS quick_links');
  db.run(`
    CREATE TABLE quick_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      url TEXT
    )
  `);
  const quickLinks = [
    'Kampanya 1', 'Kampanya 2', 'Kampanya 3', 'Kampanya 4',
    'Kampanya 5', 'Kampanya 6', 'Kampanya 7', 'Kampanya 8',
  ];
  quickLinks.forEach(title => {
    db.run('INSERT INTO quick_links (title, url) VALUES (?, ?)', [title, '#']);
  });

  // Slider Items
  db.run('DROP TABLE IF EXISTS slider_items');
  db.run(`
    CREATE TABLE slider_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      image_url TEXT
    )
  `);
  for (let i = 1; i <= 10; i++) {
    db.run('INSERT INTO slider_items (title, image_url) VALUES (?, ?)', [
      `Slider Ürün ${i}`,
      `slider.jpg`
    ]);
  }

  // Products
  db.run('DROP TABLE IF EXISTS products');
  db.run(`
    CREATE TABLE products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      category TEXT,
      price REAL,
      rating INTEGER,
      image_url TEXT
    )
  `);

  const sampleProducts = [
    { title: 'Elektronik Ürün 1', category: 'electronics', price: 1999.99, rating: 4 },
    { title: 'Elektronik Ürün 2', category: 'electronics', price: 899.99, rating: 5 },
    { title: 'Elektronik Ürün 3', category: 'electronics', price: 599.99, rating: 3 },
    { title: 'Önerilen Ürün 1', category: 'recommendation', price: 499.99, rating: 5 },
    { title: 'Önerilen Ürün 2', category: 'recommendation', price: 799.99, rating: 4 },
    { title: 'Önerilen Ürün 3', category: 'recommendation', price: 999.99, rating: 3 },
    { title: 'Önerilen Ürün 4', category: 'recommendation', price: 1299.99, rating: 4 },
    { title: 'Önerilen Ürün 5', category: 'recommendation', price: 699.99, rating: 5 }
  ];

  sampleProducts.forEach((p, i) => {
    db.run(
      `INSERT INTO products (title, category, price, rating, image_url)
       VALUES (?, ?, ?, ?, ?)`,
      [
        p.title,
        p.category,
        p.price,
        p.rating,
        `product.jpg`
      ]
    );
  });
});

db.close(() => {
  console.log('✅ Veritabanı başarıyla oluşturuldu ve dolduruldu.');
});
