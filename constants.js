const IP = 'localhost';
const PORT = 50541;
const cliArg = process.argv.slice(2);

const movementKeys = {
  W: "Move: up",
  A: "Move: left",
  S: "Move: down",
  D: "Move: right",
};

const cannedMessages = {
  M: 'Hello There',
  N: 'Yippy',
  B: 'Oh no'
};

module.exports = {
  IP,
  PORT,
  cliArg,
  movementKeys,
  cannedMessages
};
