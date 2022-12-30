import {request} from '@/config/request';
import {ResData} from '@/types/ResData';

export interface IContactItem {
  id: number;
  avatar: string;
  nickname: string;
  is_group: boolean;
}

export const getContactList = (data: {}) => {
  return request<
    Promise<
      ResData<{
        list: IContactItem[];
      }>
    >
  >({ url: '/friend/query_friend_list', data });
};
