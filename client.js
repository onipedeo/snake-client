const net = require('net');
const { IP, PORT, cliArg } = require("./constants");
//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  //feedback from server
  conn.on("data", (messageFromServer) => {
    console.log("message from Server: ", messageFromServer);
  });
  //tasks to do on connection to the server
  conn.on("connect", () => {
    console.log("connection successful to the game server");
    //sends my initial to the server
    conn.write(`Name: ${cliArg}`);
  });
  return conn;
};

module.exports = { connect };