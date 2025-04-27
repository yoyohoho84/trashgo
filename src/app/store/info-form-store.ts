import { action, makeObservable, observable } from 'mobx';

export interface IInfoForm {
  surname?: string;
  name?: string;
  email?: string;
  telegram?: string;
}

export class InfoFormStore {
  data: IInfoForm = {};

  setData = (data: IInfoForm) => {
    this.data = data;
  };

  resetStore = () => {
    this.data = {};
  };

  constructor() {
    makeObservable(this, {
      data: observable,
      setData: action,
      resetStore: action,
    });
  }
}
