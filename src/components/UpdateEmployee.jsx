import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateEmployee } from '../slices/employeeSlice';

const UpdateEmployee = () => {
  const { id } = useParams();
  const { employees } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find employee by ID
  const employee = employees.find(emp => emp.id === Number(id)); // cast id to number for match

  // Full form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    department: '',
    salary: ''
  });

  // Pre-fill form on load
  useEffect(() => {
    if (employee) {
      setForm({
        name: employee.name,
        email: employee.email,
        age: employee.age,
        department: employee.department,
        salary: employee.salary
      });
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee({ id: Number(id), ...form }));
    navigate('/');
  };

  if (!employee) {
    return <p className="container mt-4">Employee not found.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Employee</h2>
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
       <button
  className="btn"
  type="submit"
  style={{
    backgroundColor: '#ff6f00',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold'
  }}
>
  Update
</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
