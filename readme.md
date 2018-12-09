# FE9 Fetch Demo

这里是前端九部 fetch 部分示例代码，文章地址 [fetch](https://www.yuque.com/fe9/basic/rfwqry)。

示例代码中为了写作方便，使用了一些库，如果你对它不熟悉，可以忽略。这里目的是为了让你对 fetch 有个全面的认识。**代码中某些写法纯粹为了行文方便，请勿在生产环境中写类似的代码**

## 如何使用

```shell
$ git clone https://github.com/GoDotDotDot/fe9-fetch-demo.git
$ cd fe9-fetch-demo
$ yarn
$ node server.js
```

默认端口为 4000，请在浏览器中输入：http://127.0.0.1:4000/


如果需要使用跨域版本，需要同时使用 `node cors.js` 命令来启动 cors 服务，默认端口为4001， 请在浏览器中输入 http://127.0.0.1:4000/request 。

**在使用 `cors.js` 模拟跨域错误时，如果你想避免控制台提示的错误，请关注 `server.js` 文件，将 第58行中的 `*` 替换成第53行的 `origin`。**


## PR

如果您有更好的建议，可以通过 `PR` 形式向我们推荐，共建和谐美好繁荣社区。
