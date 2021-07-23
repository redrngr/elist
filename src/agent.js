import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/redrngr/api',
  responseType: 'json',
});

const Auth = {
  signup: (email, password) => instance.post('/users/registration', { user: { email, password } }),
  signin: (email, password) => instance.post('/users/login', { user: { email, password } })
};

const Employees = {
  all: () => instance.get('/employees'),
  one: (id) => instance.get(`/employees/${id}`),
  delete: (id) => instance.delete(`/employees/${id}`),
  add: (data) => instance.post(`/employees`, data),
  search: (text) => instance.get(`/employees?name_like=${text}`)
};

// eslint-disable-next-line
export default { Auth, Employees };