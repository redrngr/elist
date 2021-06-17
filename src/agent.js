import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const omitSlug = employee => Object.assign({}, employee, { slug: undefined });

const Employees = {
  all: page =>
    requests.get(`/employees?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/employees?author=${encode(author)}&${limit(5, page)}`),
  del: slug =>
    requests.del(`/employees/${slug}`),
  get: slug =>
    requests.get(`/employees/${slug}`),
  update: employee =>
    requests.put(`/employees/${employee.slug}`, { employee: omitSlug(employee) }),
  create: employee =>
    requests.post('/employees', { employee })
};


const Profile = {
  get: username =>
    requests.get(`/profiles/${username}`),
};

export default { Employees, Auth, Profile, setToken: _token => { token = _token; } };
