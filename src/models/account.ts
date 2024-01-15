import {runInAction, makeAutoObservable, observable} from 'mobx';
import storage from '../utils/storage';
import {RootStore} from '.';
import * as AccountAPI from '../services/account';
import {IUserInfo} from '@/types/UserInfo';
import {ILoginReq} from '../services/account';
import { getUserInfo, logout, setToken, setUserInfo } from '@/utils/auth';

export class UserStore {
  public rootStore: RootStore;

  constructor(store: RootStore) {
    this.rootStore = store;
    makeAutoObservable(this, {
      loading: observable,
      userInfo: observable
    });
  }

  loading = false;
  userInfo: IUserInfo | null = getUserInfo();

  async login(params: ILoginReq) {
    runInAction(() => {
      this.loading = true;
    });
    try {
      const res: AwaitedFun<typeof AccountAPI.login> = await AccountAPI.login(
        params,
      );
      await setUserInfo(res.data);
      await setToken(res.data.token);
      runInAction(() => {
        this.userInfo = res.data;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async logout () {
    await logout()
    runInAction(() => {
      this.userInfo = null;
    });
  }
}
