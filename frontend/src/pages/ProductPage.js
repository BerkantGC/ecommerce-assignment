import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '../redux/visitedSlice';
import { API_URL } from '../helper';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setProduct(res.data);
        dispatch(addVisitedProduct(res.data)); // Redux'a ekle
      })
      .catch(err => console.error(err));
  }, [id, dispatch]);

  if (!product) return <p className="text-center mt-4">Yükleniyor...</p>;

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <div className="row">
          <div className="col-md-5">
            <img src={`${API_URL}/image/${product.image_url}`} alt={product.title} className="img-fluid" />
          </div>
          <div className="col-md-7">
            <h3>{product.title}</h3>
            <p className="text-primary fw-bold fs-4">₺{product.price.toFixed(2)}</p>
            <p>⭐ {product.rating} / 5</p>
            <p>Bu ürün detay sayfasıdır. Redux ile ziyaret kaydedildi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
