// Staging URL
// export const BASE_URL = 'https://shilpijewels.8848digitalerp.com';
// export const BASE_URL = 'http://192.168.29.54:8000';

// PRODUCTION URL
export const BASE_URL = 'https://prod-shilpijewels.8848digitalerp.com';

export const headerGenerator = (token: any) => {
  const API_CONFIG = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };
  return API_CONFIG;
};
