import React from 'react';
import '../style/Footer.css'; 
const Footer = () => {
  return (
    <footer className="bottom">
    
      <div className="bottom-text">
        © 2025, made with <span>❤️</span> by <a href="#" className="brand-link">Creative Tim</a> for a better web. • Distributed by <a href="#" className="brand-link">ThemeWagon</a>
      </div>

    
      <div className="bottom-links">
        <a href="#" className="footer-link">Creative Tim</a>
        <a href="#" className="footer-link">About Us</a>
        <a href="#" className="footer-link">Blog</a>
        <a href="#" className="footer-link">License</a>
      </div>
    </footer>
  );
};

export default Footer;