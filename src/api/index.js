import axios from 'axios';

let host = 'https://api.doit.jtoid.com';

if (process.env.NODE_ENV === 'development') {
  host = 'http://localhost:8000';
}

let token = null;
let user = null;

const instance = axios.create({
  baseURL: host,
});

instance.interceptors.request.use(async (config) => {
  const { headers } = config;
  const updatedConfig = {
    headers: {
      ...headers,
      ...{
        Authorization: `Bearer ${token}`,
      },
    },
  };
  return {
    ...config,
    ...updatedConfig,
  };
});


instance.interceptors.response.use(async response => response, async (error) => {
  console.log(error.response);
  if (error.response.status === 403) {
    const newJwt = await user.jwt();
    const { data: { token: newToken } } = await instance.post('/login', { token: newJwt });
    token = newToken;
    const { config } = error;
    const response = await instance.request(config);
    return response;
  }
  throw error;
});

instance.setToken = (newToken) => { token = newToken; };
instance.setUser = (newUser) => { user = newUser; };

export default instance;
