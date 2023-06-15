const { cannedMessages, movementKeys } = require("./constants");
//stores the active TCP Connection objec.
let connection;

//Handling input from the keyboard
const setUpInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //Code that handles userInput
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      //To ensure all inputted keys are responsive.
      key = key.toUpperCase();
      //close terminal on pressing Ctrl + C
      if (key === '\u0003') {
        process.exit();
      }
      //WASD movement implementation
      const input = movementKeys[key];
      if (input) {
        connection.write(input);
      }
    });

  };
  //Canned messages implementation
  stdin.on("data", (data) => {
    data = data.toUpperCase();
    const msg = cannedMessages[data];
    if (msg) {
      connection.write(`Say: ${msg}`);
    }
  });

  handleUserInput();
  return stdin;
};

module.exports = { setUpInput };