import { fnPureFetchData } from '../util';
import BaseAPI from '../base';
import { api } from '../interface/common';

class User extends BaseAPI {
  protected sLoginUrl: string;
  protected sRegisterUrl: string;
  constructor() {
    super();
    this.sLoginUrl = '/login';
    this.sRegisterUrl = '/register';
  }

  public login(option: api.IRequestOption) {
    return fnPureFetchData({
      url: this.sLoginUrl,
      method: 'post',
      ...option
    });
  }

  public regitster(option: api.IRequestOption) {
    return fnPureFetchData({
      url: this.sRegisterUrl,
      method: 'post',
      ...option
    });
  }
}

export { User };
