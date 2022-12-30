import { IUserInfo } from '@/types/UserInfo';
import storage from './storage';

let token = '';
let userInfo: IUserInfo|null = null;

export const getToken = () => token;
export const getUserInfo = () => userInfo;

export const setToken = async (value: string) => {
  token = value;
};

export const setUserInfo = async (info: IUserInfo|null) => {
  userInfo = info;
  await storage.setItem('userInfo', info);
}

export const logout = async function () {
  setToken('');
  return await storage.removeItem('userInfo');
};

export const loadCacheUInfo = async () => {
  const uInfo: IUserInfo|null = await storage.getItem('userInfo') as any;
  if (uInfo) {
    setToken(uInfo.token);
    setUserInfo(uInfo);
  }
}