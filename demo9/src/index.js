/**
 * 我们使用 webpack 来管理这些脚本
 * 在 webpack 4 中，可以无须任何配置使用
 * 然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持 配置文件
 * 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它
 * 我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件
 */

import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // lodash目前是通过这个js引入的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console1!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());



 