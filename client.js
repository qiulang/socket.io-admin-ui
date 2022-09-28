import { io } from "socket.io-client";

const port = process.env.PORT || 3000;

const socket = io(`http://localhost:${port}`,{transports: ['websocket']});

socket.on("connect", () => {
  console.log(`connect ${socket.id}`);
  // with callback it will crush server
  socket.emit('login', {user:"10001",token:"fake"},reply => {})
  // no callback it is fine
  // socket.emit('login', {user:"10001",token:"fake"})
});

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

socket.on("disconnect", (reason) => {
  console.log(`disconnect due to ${reason}`);
});
