"Use Stict";
//  asking the user for their name
let askName = prompt("Whoa there, stranger danger!\nWhat's your name?");
while (askName === "" || askName === null) { // user must enter ask the prommpt to move on
  askName = prompt("Nope! You ain't entering until I get a name!");

  //  successfully got their name to properly greet them
  console.log(" Their name is " + askName + " ");
}
alert("Hey " + askName + "!\nThanks for dropping by!");
alert("My name is Shanythia.\nNice to meet you!");
alert("Actually..");
alert("Got a nickname?");
//  on second thought we want the user to enter their nickname 
let getMoniker = prompt("What is it?");
while (getMoniker === "" || getMoniker === null) {
  alert("Seriously?"); // banter triggers when user doesn't enter their username
  getMoniker = prompt("Enter nickname?");
  alert("Stubborn aren't ya?");
  alert("Ok..\nLets try this again..");
  getMoniker = prompt("" + askName + ",\nWhat is your nickname?");
  alert("OK! Whatever..\njust call me Shanii."); // user never learns your nickname as punishment
  console.log(" " + askName + " is stubborn ");
  break;
}
//  this is what triggers when user gives nickname @ prompt, you give them your nickname
{
  if (getMoniker)
    alert("" + getMoniker + "? Ok!\nFolks call me, Shanii or Bear!");
  console.log("" + askName + " wants to be known as " + getMoniker + "");
}

//  time to challenge the user
let challengeUser = true;

while (challengeUser) {
  let acceptChallenge = prompt("Do you accept my challenge?");
  if (acceptChallenge.toUpperCase() === 'OK' || acceptChallenge.toUpperCase() === "YES" || acceptChallenge.toUpperCase() === "Y") {
    challengeUser = false;
    console.log("Challenge has been accepted.");
  }
}
let askGamer = prompt("Do you like videogames?");
if (askGamer === "Yes")
  alert("Cool!\nI do too!"); 
  if (askGamer === "Yes") {
    askGamer = prompt("Do you play on Xbox?");
    alert("Yesss! Shoot me your gamertag sometime!");

    while (askGamer === "No") {
      alert("Eh, to each their own.");
    }
  }
// ask user if they like anime
  let askAnime = prompt("Do you like anime?");
  if (askAnime === "Yes") {
    alert("Cool, I'm currently watching MHA! My Here Academia\nI'm also keeping up by reading the Manga"); }
    if (askAnime === "Yes") {
      askAnime = prompt("Have you watched it?");
      alert("Lets talk about it sometime!");
  
      while (askGamer === "No") {
        alert("Eh, to each their own.");
      }
    }
  
// ask the user's age
let askAge = prompt("Are you over the age of 18?");
if (askAge === "yes") {
  alert("nice!") ;
  alert("wait") ;
}
  askAge = prompt("Are you over the age of 21?");
  if (askAge === "yes") {
  alert("Oh cool!");
}
    while (askAge === null) {
      alert("Wait a minute..");
      alert("You gotta be 18 to be in this program!");
  }
  

// the user must guess your age
let myAge = 26;

for (let i = 18; i < 30; i++) {
  let guessAge = prompt("How old do you think I am?");
  if (guessAge == myAge) {
    alert("Das riiight! ~ '94!");
    break;
  }
  else if (guessAge > myAge) {
    alert("Nope!!");
  }
  else if (guessAge < myAge) {
    alert("Flattering!~ But nope");
  }
}
// user must guess my favorite animal
let animal = ["Bears"];
for (let i = -3; i < 3; i++) {
  let favoriteAnimal = prompt("Between these animals can you guess my favorite?\nHyenas, Lions, Bears, Wolves, Goats, Skinks, and Ducks");
  if (animal.indexOf(favoriteAnimal) == -3) 
  while (favoriteAnimal === "" || favoriteAnimal=== null) {
    alert("Nope.~");
    alert("Guess again!");
  }
  else {
    alert("You know me so well.~");
    alert("Good job!");
    break;
  }
}