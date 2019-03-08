'use strict';

// const assert = require('assert');
const FCClient = require('@alicloud/fc2');
const zip = require('./zip');
function isString(str) {
  return Object.prototype.toString.call(str) === '[object String]';
}
module.exports = app => {
  app.addSingleton('aliyunFc', (config, app) => {
    // checkBucketConfig(config);
    const { accountId, ...rest } = config;
    const client = new FCClient(accountId, rest);
    const originCreateFunc = client.createFunction.bind(client);
    client.createFunction = async function(name, option) {
      option.code = {
        zipFile: isString(option.code) ? await zip.compressByStr(option.code) : option.code,
      };
      console.log(555555, option.code);
      return originCreateFunc(name, option);
    };
    return client;
  });
};
