'use strict';

const mock = require('egg-mock');

describe('test/aliyun-fc.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/aliyun-fc-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, aliyunFc')
      .expect(200);
  });
});
