// Footer.js
import React from 'react';
import './Footer.css'; // You can create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} HOME HUB. Crafted by Heather.</p>
    </footer>
  );
};

export default Footer;
