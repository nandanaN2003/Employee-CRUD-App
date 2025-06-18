import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../slices/employeeSlice';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const { employees } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      {/* Styled Heading */}
      <h4
        className="fw-bold text-uppercase mb-4 text-center"
        style={{
          color: '#ff6f00',
          letterSpacing: '1px',
          paddingBottom: '10px',
          fontFamily: 'Segoe UI, sans-serif'
        }}
      >
        Employee List
      </h4>

      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <div className="table-responsive">
  <table className="table table-dark table-bordered text-center">
    <thead style={{ backgroundColor: '#ff6f00', color: 'white' }}>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((emp) => (
        <tr key={emp.id}>
          <td>{emp.name}</td>
          <td>{emp.email}</td>
          <td>{emp.age}</td>
          <td>{emp.department}</td>
          <td>₹ {emp.salary}</td>
          <td>
            <Link to={`/edit/${emp.id}`} className="text-warning me-3" title="Edit">
              <i className="bi bi-pencil-square fs-5"></i>
            </Link>
            <button
              className="btn p-0 border-0 bg-transparent text-danger"
              onClick={() => dispatch(deleteEmployee(emp.id))}
              title="Delete"
            >
              <i className="bi bi-trash-fill fs-5"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      )}
    </div>
  );
};

export default EmployeeList;
