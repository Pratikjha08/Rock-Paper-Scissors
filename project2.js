//Rock,paper and scissor 

const prompt = require("prompt-sync")();

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
let randomNum = getRandomInt(3);
let userGuess = prompt("Enter Rock, Paper or Scissor: ");
let compGuess;
if(randomNum==1){
    compGuess = "Rock";
}else if(randomNum==2){
    compGuess = "Paper";
}else if(randomNum==3){
    compGuess = "Scissor";
}


let game = (compGuess,userGuess)=>{
    if(userGuess==compGuess){
        return null;
    }else if(compGuess == "Rock"){
        if(userGuess == "Paper"){
            return true;
        }
        else if(userGuess == "Scissor"){
            return false;
        }
    }else if(compGuess == "Paper"){
        if(userGuess == "Rock"){
            return false;
        }
        else if(userGuess == "Scissor"){
            return true;
        }
    }else if(compGuess == "Scissor"){
        if(userGuess == "Paper"){
            return false;
        }
        else if(userGuess == "Rock"){
            return true;
        }
    }
}
console.log(`You choose ${userGuess}`);
console.log(`Computer choose ${compGuess}`);

let a = game(compGuess,userGuess);
if(a==null){
    console.log("Game is tie");
}else if(a==true){
    console.log("You won the game");
}else if(a==false){
    console.log("Computer won the game");
}