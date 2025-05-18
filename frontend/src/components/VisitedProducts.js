import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../helper';

const VisitedProducts = () => {
  const visited = useSelector(state => state.visited);
  const navigate = useNavigate();

  if (visited.length === 0) return null;

  return (
    <div className="container my-4">
      <h4 className="mb-3">🕵️‍♀️ Gezilen Ürünler</h4>
      <div className="row">
        {visited.map(product => (
          <div
            key={product.id}
            className="col-6 col-md-4 col-lg-3 mb-4"
            role="button"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="card h-100 shadow-sm">
              <img src={`${API_URL}/image/${product.image_url}`} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="fw-bold text-primary">₺{product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitedProducts;
