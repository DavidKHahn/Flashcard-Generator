// * Create a new file named `ClozeCard.js`:

//   * This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
//     `module.exports = ClozeCard;`

//   * The constructor should accept two arguments: `text` and `cloze`.

//   * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

//   * The constructed object should have a `partial` property that contains _only_ the partial text.

//   * The constructed object should have a `fullText` property that contains _only_ the full text.

//   * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.


var BasicCard = require("./BasicCard.js");

function ClozeCard(text,cloze){
    this.text = text;
    this.cloze = cloze;
    //this.partial=(this.text).replace(this.cloze,"...");
    this.partial = function(){
        console.log((this.text).replace(this.cloze,"..."));
        if( ((this.text).indexOf(this.cloze)) === -1){
            console.log("Error because '"+ this.cloze+ "' doesn't appear in '"+this.text+"' sentence");
        }
     };
    this.fullText = function(){
        console.log((this.text));
        //console.log((this.cloze)+(this.text));
    };
};
var BasicCard = require("./BasicCard.js");

function ClozeCard(text, cloze) {
    this.cloze = text,
    this.partial = cloze,
    this.partial = function() {
        console.log((this.text).replace(this.cloze,"..."));
           this.partial = text.replace(cloze, "... ");
    if ((this.text.search(this.cloze)) < 0) {
        console.log("the cloze deletion does _not_ appear in the input text");
    }
}


module.exports = ClozeCard;