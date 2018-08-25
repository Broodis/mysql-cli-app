var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the display function after the connection is made to prompt the user
  display();
});

function display() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
    })
};

var questions = [{
  name: "productId",
  type: "rawlist",
  message: "What is the ID of the product that you would like to purchase?",
  choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
}, {
  name: "quantity",
  type: "input",
  message: "How many of this product would you like to purchase?",
}];
function ask() {
  inquirer.prompt(questions, function(answers) {
    if (answer.)
  })

}
