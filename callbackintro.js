function findWaldo(arr, found) {
  arr.forEach(function(name, index) { //for.each is a function
  //goes through list and calls upon it.
    if (name == "Waldo") {
    found(index);
    }
  });
}

//Index value is passed and printing
function actionWhenFound(all) {
  console.log("Found him at: " + all + ".");// all is a closure.
  //Seen something similar in ruby and looked on stackoverflow which put me in the right direction.
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//I still need to doe more reading on the callback functions. A little confused right now but myseLf and Lydia got through it.

