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
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        connection.write('Move: up');
      }
      if (key === 'a') {
        connection.write('Move: left');
      }
      if (key === 's') {
        connection.write('Move: down');
      }
      if (key === 'd') {
        connection.write('Move: right');
      }
    });
  };

  handleUserInput();
  return stdin;
}

module.exports = { setUpInput };