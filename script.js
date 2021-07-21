let askName = prompt("Hey!\nWhat's your name?");
 console.log(askName);
 //give user hint on answer

let askMonth = prompt("Welcome " + askName + "!\nTell me what month were you born?");
 console.log(askMonth);
if (askMonth.toLowerCase ===  "september" || askMonth.toLowerCase === "october");
  alert("Oh! Interesting.. ⚈ ̫ ⚈")
 
  //user just needs to agree
let challengeAcc = prompt("" + askMonth + "? That's nice!\nWant to try to guess mines?");
 console.log(challengeAcc);

 //user needs to enter "Okay" "Ok"  "Sure"
if (challengeAcc ===  "Okay" || challengeAcc === "Ok" || challengeAcc ==="Sure");
 alert("I'll even give you a hint " + askName + "! •̀.̫ •́✧\n\nMy arrival was aligned with the Autumnal Equinox!");
 
 //user needs to answer September
let answer = false;
while(answer == false){

alert("Easy right?")
let monthAns = prompt("What's your answer?");
if(monthAns == "September"){
 alert("See!? Too easy!\nI practically gave you the answer!");
 alert("How nice of me.~ (´ ꒳` )");
 answer == true;
}
else{
    alert("Seriously?");
}

}
