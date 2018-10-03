import Vue from 'vue';

import { User } from './api/user';

declare module 'vue/types/vue' {
  interface Vue {
    $dataCenter: {
      user: User;
    };
  }
}
