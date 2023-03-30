import {runInAction, makeAutoObservable, observable} from 'mobx';
import {RootStore} from '.';
import {ILoginReq} from '../services/account';
import { getContactList, IContactItem } from '@/services/contact';

export class ContactStore {
  public rootStore: RootStore;

  constructor(store: RootStore) {
    this.rootStore = store;
    makeAutoObservable(this, {
      loading: observable,
      list: observable,
    });
  }

  loading = false;
  list: IContactItem[] = [];

  async fetchContacts() {
    runInAction(() => {
      this.loading = true;
    })
    try {
      const res: AwaitedFun<typeof getContactList> = await getContactList({});
      runInAction(() => {
        this.list = res.data.list;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}
