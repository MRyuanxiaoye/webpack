/**
 * 我们使用 webpack 来管理这些脚本
 */

import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // lodash目前是通过这个js引入的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());



 