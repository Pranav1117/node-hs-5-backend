const express = require("express");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS", "PUT"],
  },
});

io.on("connection", (socket) => {
  socket.on("chat_message", (value) => {
    console.log("message from client:", value);
    io.emit("chat_message", value);
  });
});

const PORT = 4000;
http.listen(PORT, () => {
  console.log(`server is running...${PORT}`);
});
