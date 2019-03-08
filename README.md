# egg-aliyun-fc

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-aliyun-fc.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-aliyun-fc
[travis-image]: https://img.shields.io/travis/eggjs/egg-aliyun-fc.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-aliyun-fc
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-aliyun-fc.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-aliyun-fc?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-aliyun-fc.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-aliyun-fc
[snyk-image]: https://snyk.io/test/npm/egg-aliyun-fc/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-aliyun-fc
[download-image]: https://img.shields.io/npm/dm/egg-aliyun-fc.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-aliyun-fc

<!--
Description here.
-->

## Install

```bash
$ npm i egg-aliyun-fc --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.aliyunFc = {
  enable: true,
  package: 'egg-aliyun-fc',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.aliyunFc = {
  client: {
    accountId: '<>',
    accessKeyID: '<>',
    accessKeySecret: '<>',
    region: '<>'
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```js
export default class  queryService extends Service {
  async test() {
   const fc = this.ctx.fc;
   const functioncode = await fc.getFunctionCode('anymock', 'handler')// 这里的详细api请参见 http://doxmate.cool/aliyun/fc-nodejs-sdk/api.html#client__createFunction
   const functioncode1 = await fc.createFunction('iat_anymock', {
        functionName: 'xxx',
        handler: 'main.handler',
        runtime: 'nodejs8',
        memorySize: 100,
        timeout: 5,
        code: `
          function(event, context, callback) { 
            console.log('hello world');
            callback(null, 'hello world'); 
          }
        `
      }); // 增加了string形式的create 和update
  }
}

```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
