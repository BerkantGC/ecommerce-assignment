# 🛍️ E-Commerce Assignment Project

Bu proje, React + Express + SQLite kullanarak geliştirilen full-stack bir e-ticaret ana sayfasıdır. Tüm içerikler dinamik olarak backend API'den gelir, responsive tasarım ve Redux ile gezilen ürün takibi yapılır.

---

## 🔧 Kullanılan Teknolojiler

### 🖥️ Frontend
- React.js
- React Router DOM
- Redux Toolkit
- Axios
- Bootstrap 5
- React Responsive Carousel

### 🔌 Backend
- Node.js + Express
- SQLite (kalıcı dosya)
- CORS, Nodemon

---

## 📁 Proje Yapısı

```
ecommerce-midterm/
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── db.js
│   │   ├── routes/api.js
│   │   ├── controllers/productController.js
│   ├── db.sqlite
│   └── seed.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

---

## ⚙️ Kurulum Adımları

### 1. Backend

```bash
cd backend
npm install
npm run seed       # db.sqlite veritabanını oluşturur
npm run dev        # http://localhost:8000 üzerinde çalışır
```

### 2. Frontend

```bash
cd frontend
npm install
npm start          # http://localhost:3000 üzerinde çalışır
```

## 🎯 Özellikler

- ✅ Sticky & responsive menü (en az 2 dropdown)
- ✅ API'den gelen kampanyalar (`QuickLinks`)
- ✅ Slider (10 ürün)
- ✅ Elektronik fırsatlar (3 saniyede döner)
- ✅ Sana özel öneriler (fiyat + yıldızlı rating)
- ✅ Ürün detay sayfası (`/product/:id`)
- ✅ Redux ile gezilen ürünler takibi

---

---

## 🌍 Deploy

### 🔗 Backend (Render):
```
https://ecommerce-assignment-o7bi.onrender.com
```

### 🔗 Frontend (Vercel):
```
https://ecommerce-assignment-fawn.vercel.app/
```

---

## 📸 Statik Dosyalar

Backend üzerinde `public/image/` klasöründe barınır.

Örnek:
```
http://localhost:8000/image/product.jpg
```
