// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // "... was the first president of the United States."
// console.log(firstPresidentCloze.partial);

// // "George Washington was the first president of the United States."
// console.log(firstPresidentCloze.fullText):

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

var basicCardQ = [];
//we have our set of questions pushed into an array using the constructor object
basicCardQ.push(new BasicCard("Currently, how much debt does the US economy owe?", "$20 Trillion"));
basicCardQ.push(new BasicCard("When did Stephen Hawking die?", "March, 14, 2018"));
basicCardQ.push(new BasicCard("How many rings does Stephen Curry have?", "2"));
basicCardQ.push(new BasicCard("What is the capital of the USA?", "Washington D.C."));
basicCardQ.push(new BasicCard("When the USA gain it's independence?", "July 4th, 1776"));
//we have our set of questions pushed into an array using the constructor object
var clozeCardQ = [];
clozeCardQ.push(new ClozeCard("Michael Jordan has played for 15 seasons", "15"));
clozeCardQ.push(new ClozeCard("Kanye West is the artist for the song Gold Digger", "Kanye West"));
clozeCardQ.push(new ClozeCard("Michael Jackson was famous for his moonwalk", "Michael Jackson"));
clozeCardQ.push(new ClozeCard("President Obama was the first African American president", "Obama"));
clozeCardQ.push(new ClozeCard("Los Angeles is the 2nd most populated city in the USA", "Los Angeles"));

startGame();
//function to prompt user to choose which game to play
function startGame() {
    console.log();
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of quiz game would like to play?\n",
            choices: ["Basic-Card", "Cloze-Card"],
            name: "card"
        }
    ]).then(function (data) {
        if (data.card === "Basic-Card") {
            basicCardStart();
        }
        else {
            clozeCardStart();
        }
    })
}
//user would then answer a set of questions from the basicCardFunction set as well as the clozeCardFunction
//based on their answers the score count would increase and at the end of the game user can choose to play again.
var startBasic = 0;
var basicScore = 0;
function basicCardStart() {
    if (basicScore < basicCardQ.length) {
        console.log("\nQuestion : ");
        console.log("\n" + basicCardQ[startBasic].front + "\n");
        inquirer.prompt([
            {
                type: "input",
                message: "Answer",
                name: "userGuess"
            }
        ]).then(function (user) {
            if (user.userGuess === basicCardQ[startBasic].back) {
                console.log("You are correct!");
                startBasic++;
                basicScore++;
            } else {
                console.log("Incorrect!");
                startBasic++;
            }
            
            basicCardStart();
        })   
    } else {
        console.log("\nYour score is: " + basicScore);
        console.log();
        playAgain();
    }
}

var startCloze = 0;
var clozeScore = 0;
function clozeCardStart() {
    if (basicScore < clozeCardQ.length) {
        console.log("\nQuestion : ");
        console.log();
        clozeCardQ[startCloze].partial();
        inquirer.prompt([
            {
                type: "input",
                message: "Answer",
                name: "userGuess"
            }
        ]).then(function (user) {
            if (user.userGuess === clozeCardQ[startCloze].cloze) {
                console.log("You are correct!");
                startCloze++;
                clozeScore++;
            } else {
                console.log("Incorrect!" + clozeCardQ[startCloze].text +"is the right answer!");
                startCloze++;
            }
            
            clozeCardStart();
        })   
    } else {
        console.log("\nYour score is: " + clozeScore);
        console.log();
        playAgain();
    }
}
//user has option to play again or next time
function playAgain() {
    inquirer.prompt([
        {
            type:"confirm",
            message: "\nPlay again? Yes or No",
            name: "confirm"
        }
    ]).then(function(response) {
        if(response.confirm) {
            console.log("Let's start!");

        }else {
            console.log("\nNext time!");
        }
    });
};