const express = require('express');
const cors = require('cors');
const app = express();
const apiRoutes = require('./routes/api');
const path = require('path');

app.use('/image', express.static(path.join(__dirname, '../public/image')));

app.use(cors({
  origin: '*',         // Geliştirme için herkese açık
  methods: ['GET'],    // Gerekli metodları ekleyebilirsin
}));

app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});