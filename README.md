
# Socket.IO Fiddle

```
$ npm install           # install the dependencies
$ npm start             # run the server
$ npm run client        # run the nodejs client
```

And point your browser to `http://localhost:3000`. Optionally, specify a port by supplying the `PORT` env variable.

Other branches:

- [TypeScript](https://github.com/socketio/socket.io-fiddle/tree/typescript)
- [Multiple servers (with Redis adapter/emitter)](https://github.com/socketio/socket.io-fiddle/tree/multiple-servers)
- [Example with CORS](https://github.com/socketio/socket.io-fiddle/tree/cors)
- [Example with self-signed certificate](https://github.com/socketio/socket.io-fiddle/tree/ssl-example)
- [With Vite](https://github.com/socketio/socket.io-fiddle/tree/vite)
- [With µWebSockets.js](https://github.com/socketio/socket.io-fiddle/tree/uws)

## How to report an issue

Please fork this project, edit it to reproduce the incorrect behavior and link it in the discussion [here](https://github.com/socketio/socket.io/discussions/new).

This is really important for us to be able to help you. Thanks!



## socket.io-redis & @socket.io/admin-ui

Only when socket.io-redis & @socket.io/admin-ui works together and  `socket.emit('xxx', cb)` the sever will crash

```
  // with callback it will crush server
  socket.emit('login', {user:"10001",token:"fake"},reply => {})
  // no callback it is fine
  // socket.emit('login', {user:"10001",token:"fake"})
```



Both socket.io-redis 6&7 have this problem.
