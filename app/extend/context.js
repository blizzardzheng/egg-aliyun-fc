'use strict';

module.exports = {
  /**
   * FC Singleton instance
   * @member Context#fc
   * @since 1.0.0
   * @see App#oss
   */
  get fc() {
    console.log(this.app, this.app.aliyunFc);
    return this.app.aliyunFc;
  },
};
