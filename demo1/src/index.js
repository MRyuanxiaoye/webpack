function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

/**
 * 在此示例中，<script> 标签之间存在隐式依赖关系。
 * index.js 文件执行之前，还依赖于页面中引入的 lodash。
 * 之所以说是隐式的是因为 index.js 并未显式声明需要引入 lodash，只是假定推测已经存在一个全局变量 _。
 * 使用当前的方式去管理JavaScript项目会有一些问题
 * 无法立即体现，脚本的执行依赖于外部扩展库(external library)
 * 如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行
 * 如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码
 */

 