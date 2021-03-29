import axios from '@/api/axios';

const employeeAuth = credentials => {
  return axios.post(`/employees/auth`, credentials);
};

const getEmployeesByGroup = id => {
  return axios.get(`/employees/group/${id}`);
};

const getBestCurrentMonth = () => {
  return axios.get(`/employees/month-best/`);
};

const getAllEmployees = () => {
  return axios.get(`/employees/`);
};

export default {
  getEmployeesByGroup,
  getBestCurrentMonth,
  getAllEmployees,
  employeeAuth
};
