const net = require('net');
//establishes a connection with the game server
const port = 50541;
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: port
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (messageFromServer) => {
    console.log("message from Server: ", messageFromServer);
  });

  conn.on("connect", () => {
    console.log("connection successful to the game server");
    conn.write("Name: LDC");
  });

  return conn;
};

module.exports = { connect };