# webpack1

##Webpack的强大功能

###生成Source Maps（使调试更容易）

开发总是离不开调试，方便的调试能极大的提高开发效率，不过有时候通过打包后的文件，你是不容易找到出错了的地方，对应的你写的代码的位置的，Source Maps就是来帮我们解决这个问题的。

通过简单的配置，webpack就可以在打包时为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。

在webpack的配置文件中配置source maps，需要配置devtool，它有以下四种不同的配置选项，各具优缺点，描述如下：

<table>
	<tr style="font-size: 14px;font-weight: bold;">
		<td>devtool选项</td>
		<td>配置结果</td>
	</tr>
	<tr>
		<td>source-map</td>
		<td>在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；</td>
	</tr>
	<tr>
		<td>cheap-module-source-map</td>
		<td>在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；</td>
	</tr>
	<tr>
		<td>eval-source-map</td>
		<td>使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；</td>
	</tr>
	<tr>
		<td>cheap-module-eval-source-map</td>
		<td>这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；</td>
	</tr>
</table>

对小到中型的项目中，eval-source-map是一个很好的选项，再次强调你只应该开发阶段使用它，我们继续对上文新建的webpack.config.js，进行如下配置:

	module.exports = {
	  devtool: 'eval-source-map',
	  entry:  __dirname + "/app/main.js",
	  output: {
	    path: __dirname + "/public",
	    filename: "bundle.js"
	  }
	}


###使用webpack构建本地服务器

想不想让你的浏览器监听你的代码的修改，并自动刷新显示修改后的结果，其实Webpack提供一个可选的本地开发服务器，这个本地服务器基于node.js构建，可以实现你想要的这些功能，不过它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖

	npm install --save-dev webpack-dev-server

devserver作为webpack配置选项中的一项，以下是它的一些配置选项，更多配置可参考[这里](https://webpack.js.org/configuration/dev-server/ "悬停提示")

<table>
	<tr style="font-size: 14px;font-weight: bold;">
		<td>devserver配置选项</td>
		<td>功能说明</td>
	</tr>
	<tr>
		<td>contentBase</td>
		<td>默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）</td>
	</tr>
	<tr>
		<td>port</td>
		<td>设置默认监听端口，如果省略，默认为”8080“</td>
	</tr>
	<tr>
		<td>inline</td>
		<td>设置为true，当源文件改变时会自动刷新页面</td>
	</tr>
	<tr>
		<td>historyApiFallbackp</td>
		<td>在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html</td>
	</tr>
</table>

把这些命令加到webpack的配置文件中，现在的配置文件webpack.config.js如下所示

	module.exports = {
	  devtool: 'eval-source-map',

	  entry:  __dirname + "/app/main.js",
	  output: {
	    path: __dirname + "/public",
	    filename: "bundle.js"
	  },

	  devServer: {
	    contentBase: "./public",//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	  } 
	}

在package.json中的scripts对象中添加如下命令，用以开启本地服务器：

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "server": "webpack-dev-server --open"
  },

在终端中输入npm run server即可在本地的8080端口查看结果:

![](https://upload-images.jianshu.io/upload_images/1031000-47d5bea9ef177187.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700)

作者：zhangwang
链接：https://www.jianshu.com/p/42e11515c10f
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。