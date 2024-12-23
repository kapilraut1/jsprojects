let boxes = document.getElementById("box");
let point= document.getElementById("part");
const container=document.getElementById("container");


let number= Math.floor(Math.random()*100 + 1);
console.log(number);
container.innerHTML= `Hello ${number}`;

function solve(){
let no=prompt("Guess the number");
console.log(no);
if(no==number){
    console.log("You guessed the right number");
    
}
else if(no<number){
    console.log("The guessed number is less")
solve();
}
else{
    console.log("The guessed number is more");
    solve();
}
}

solve();

