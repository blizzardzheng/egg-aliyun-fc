// require modules
'use strict';
const JSZip = require('jszip');

exports.compressByStr = async function(codeStr) {
  const zip = new JSZip();
  zip.file('main.js', `exports.handler = ${codeStr}`);
  return zip.generateAsync({ type: 'base64', platform: 'UNIX' });
};
