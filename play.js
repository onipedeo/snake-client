//Importing dependent modules
const { connect } = require("./client");
const { setUpInput } = require("./input");

console.log("connecting...");
const returnedConnect = connect();
setUpInput(returnedConnect);
