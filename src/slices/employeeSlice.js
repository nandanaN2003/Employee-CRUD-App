import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  employees:[
  {
    id: 1,
    name: "Nandana",
    email: "nandana@gmail.com",
    age: 32,
    department: "Engineering",
    salary: 72000
  },
  {
    id: 2,
    name: "Priya ",
    email: "priya@example.com",
    age: 27,
    department: "Marketing",
    salary: 61000
  },
  {
    id: 3,
    name: "Amaya",
    email: "amaya@gmail.com",
    age: 38,
    department: "Finance",
    salary: 85000
  },
  {
    id: 4,
    name: "Sneha ",
    email: "sneha@example.com",
    age: 25,
    department: "HR",
    salary: 50000
  },
  {
    id: 5,
    name: "akhil",
    email: "akhi@example.com",
    age: 34,
    department: "Sales",
    salary: 68000
  },
  {
    id: 6,
    name: "Gautham",
    email: "gautham@example.com",
    age: 29,
    department: "Engineering",
    salary: 74000
  },
  {
    id: 7,
    name: "veni",
    email: "veni@example.com",
    age: 31,
    department: "HR",
    salary: 79000
  },
  {
    id: 8,
    name: "Kavya",
    email: "kavya@example.com",
    age: 26,
    department: "Design",
    salary: 62000
  }
]
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: {
      reducer(state, action) {
        state.employees.unshift(action.payload);
      },
      prepare(employee) {
        return { payload: { id: nanoid(), ...employee } };
      }
    },
    updateEmployee(state, action) {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee(state, action) {
      state.employees = state.employees.filter(emp => emp.id !== action.payload);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
