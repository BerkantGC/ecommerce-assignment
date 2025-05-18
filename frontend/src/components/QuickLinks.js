import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../helper';

const QuickLinks = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/quick-links`)
      .then(res => setLinks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-4">
      <h4 className="mb-3">⚡️ Hızlı Kampanyalar</h4>
      <div className="row">
        {links.map(link => (
          <div key={link.id} className="col-6 col-md-3 mb-3">
            <div className="card text-white bg-warning h-100">
              <div className="card-body d-flex justify-content-center align-items-center">
                <a href={link.url} className="stretched-link text-white fw-bold text-center text-decoration-none">
                  {link.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
