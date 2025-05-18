import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../helper';

const ElectronicsDeals = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/api/products/electronics`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products]);

  if (products.length === 0) return null;

  const current = products[currentIndex];

  return (
    <div className="container my-4">
      <h4 className="mb-3">💻 Elektronik Fırsatlar</h4>
      <div
        className="card shadow-sm p-3"
        role="button"
        onClick={() => navigate(`/product/${current.id}`)}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${API_URL}/image/${current.image_url}`}
              alt={current.title}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center px-3">
            <h5 className="card-title">{current.title}</h5>
            <p className="text-primary fw-bold">₺{current.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsDeals;
