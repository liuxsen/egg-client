import axios from 'axios';
import _ from 'lodash';
import Promise from 'promise';

import Vue from 'vue';

const vm = new Vue();

const fnPureFetchData = (option: any) => {
  return new Promise((resolve: any, reject: any) => {
    axios(option)
      .then((oRes: any) => {
        console.log(oRes);
        if (!oRes.data) {
          oRes.data = {};
        }
        if (!oRes.data.status) {
          oRes.data.status = {};
        }
        if (oRes.data.status.code === 0) {
          resolve(oRes.data.result);
        } else {
          if (oRes.data.status.msg) {
            vm.$message.error(oRes.data.status.msg);
          }
          reject(oRes);
        }
      })
      .catch((err: any) => {
        console.log(err);
        vm.$message.error('服务器错误');
      });
  });
};

export { fnPureFetchData };
