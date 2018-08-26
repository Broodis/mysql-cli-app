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
connection.connect(function (err) {
    if (err) throw err;
    // run the display function after the connection is made to prompt the user
    display();
});

function display() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        questions();
    })
};

function questions() {
    inquirer.prompt([
        {
            name: "productId",
            type: "rawlist",
            message: "What is the ID of the product that you would like to purchase?",
            type: "input"
        }, {
            name: "quantity",
            type: "input",
            message: "How many of this product would you like to purchase?",
        }
    ])
    .then(function(answer) {
        checkStock(answer.productId, answer.quantity);
    });
}

function checkStock (productId, quantity) {
    var query = "SELECT stock FROM products WHERE ?"
    connection.query(query,{
        id: productId
    },
        function(err, res) {
        if(err) throw err;
        if(stock >= quantity) {
            var query = "UPDATE products SET ? WHERE ?"
            connection.query(query,[
                {
                    stock = stock - quantity
                },
                {
                    id: product
                }], function(err, res) {
                    display();
                });
            }
            else {
                console.log("Not enough of that item, sorry!")
            }
    });
}