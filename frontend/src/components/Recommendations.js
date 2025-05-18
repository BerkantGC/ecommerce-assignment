import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../helper';
import { useNavigate } from 'react-router-dom';

const Recommendations = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/api/products/recommendations`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const renderStars = (count) => {
    return (
      <div>
        {Array(5)
          .fill()
          .map((_, i) => (
            <span key={i} style={{ color: i < count ? '#f7c948' : '#ddd' }}>
              ★
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className="container my-4">
      <h4 className="mb-3">🎯 Sana Özel Öneriler</h4>
      <div className="row">
        {products.map(product => (
          <a onClick={() => navigate(`/product/${product.id}`)} key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={`${API_URL}/image/${product.image_url}`}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text fw-bold text-primary">
                  ₺{product.price.toFixed(2)}
                </p>
                {renderStars(product.rating)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
