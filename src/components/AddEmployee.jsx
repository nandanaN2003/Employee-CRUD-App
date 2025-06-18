import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../slices/employeeSlice';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    department: '',
    salary: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add a unique ID (for simplicity, use timestamp)
    const newEmployee = {
      ...form,
      id: Date.now() // or use uuid() if you prefer
    };

    dispatch(addEmployee(newEmployee));
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Age"
          type="number"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Department"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Salary"
          type="number"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
          required
        />
        <button className="btn " style={{
                            backgroundColor: '#ff6f00',
                            color: '#fff',
                            border: 'none',
                            fontWeight: 'bold'
                        }} type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddEmployee;
