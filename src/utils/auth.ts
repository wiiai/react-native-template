import storage from './storage';

let token = '';

export const getToken = () => token;

export const setToken = async (value: string) => {
  token = value;
};

export const logout = async function () {
  return await storage.removeItem('userInfo');
};