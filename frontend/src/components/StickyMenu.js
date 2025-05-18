// components/StickyMenu.js

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/StickyMenu.css'; // We'll create this CSS file

const StickyMenu = () => {
  
  // Add hover functionality when component mounts
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('show');
        dropdown.querySelector('.dropdown-menu').classList.add('show');
      });
      
      dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show');
        dropdown.querySelector('.dropdown-menu').classList.remove('show');
      });
    });
    
    // Cleanup event listeners when component unmounts
    return () => {
      dropdowns.forEach(dropdown => {
        dropdown.removeEventListener('mouseenter', () => {});
        dropdown.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-danger" href="#">E-Ticaret</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Elektronik */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-danger" href="#" id="elektronikDropdown" role="button">
                Elektronik
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Bilgisayar / Tablet</a></li>
                <li><a className="dropdown-item" href="#">Yazıcılar & Projeksiyon</a></li>
                <li><a className="dropdown-item" href="#">Telefon & Aksesuar</a></li>
              </ul>
            </li>

            {/* Moda */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="modaDropdown" role="button">
                Moda
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Kadın Giyim</a></li>
                <li><a className="dropdown-item" href="#">Erkek Giyim</a></li>
                <li><a className="dropdown-item" href="#">Ayakkabı & Aksesuar</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#">Ev, Yaşam, Kırtasiye, Ofis</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Oto, Bahçe, Yapı Market</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Anne, Bebek, Oyuncak</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Spor, Outdoor</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StickyMenu;
