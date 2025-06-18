import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white text-center py-3 mt-auto"
      style={{ backgroundColor: '#ff6f00' }}
    >
      <div className="container">
        <small>&copy; {new Date().getFullYear()} Employee CRUD. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
