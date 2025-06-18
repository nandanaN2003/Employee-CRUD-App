import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate('/add');
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#ff6f00' }} // deep orange
    >
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">
          Employee CRUD
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <button className="btn btn-light fw-semibold" onClick={handleAddEmployee}>
            Add Employee
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
