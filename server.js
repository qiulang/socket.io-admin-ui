import { default as express } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
// import { createAdapter } from "socket.io-redis";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";
import { instrument } from "@socket.io/admin-ui";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

instrument(io, {
  auth: {
    type: "basic",
    username: "xxxx",
    password: "$2b$10$NuoyetcoPc4FY1cnUdRjiesBkhQUbTehAC4NYNm1cV7JZLoNezvdy"
  },
});

const port = +process.env.PORT || 3000;

app.use(express.static("public"));

const pubClient = createClient({ url: "redis://localhost:6379" });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
  io.listen(port);
  console.log("start the server")
});

io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);

  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });
  socket.on("login",({user,token},fn)=>{
    console.log(`user:${user}, token:${token}`)
    if (typeof fn === 'function') fn("hi")
  })
});

