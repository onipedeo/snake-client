const net = require('net');
const port = 50541;

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: port
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (messageFromServer) => {
    console.log("message from Server: ", messageFromServer);
  })
  return conn;
};

console.log("connecting...");
connect();