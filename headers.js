function printHeaders(headers) {
  for (let header of headers.entries()) {
    console.log(header[0] + ': ' + header[1]);
  }
}

const headers = new Headers();

// 我们打印下看看是否返回的是一个空的列表
printHeaders(headers); // 发现这里没有任何输出

// 我们添加一个请求头
headers.append('Content-Type', 'text/plain');

printHeaders(headers); // 输出：content-type: text/plain