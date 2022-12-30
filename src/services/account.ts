import {request} from '@/config/request';
import { ResData } from '@/types/ResData';
import { IUserInfo } from '@/types/UserInfo';

// 登录
export type ILoginRes = ResData<IUserInfo>;
export interface ILoginReq {
  account: string;
  password: string;
}
export const login = (data: ILoginReq) => {
  return request<ILoginRes>({ url: '/user/login' })
};

export const getUserInfo = () => {};

export const logout = () => {};

export const register = () => {};
