import Vue from 'vue';
import { User } from './api/user';

const oDataCenter = {
  user: new User()
};

const oFedc = {
  install(vue: any) {
    vue.prototype.$dataCenter = oDataCenter;
  }
};

export default oFedc;
