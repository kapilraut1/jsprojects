

let number = Math.floor(Math.random() * 100 + 1);
console.log(number);


function solve() {
  let no = prompt("Guess the number");
  console.log(no);
  if (no == number) {
    console.log("You guessed the right number");
  } else if (no < number) {
    console.log("The guessed number is less");
    solve();
  } else {
    console.log("The guessed number is more");
    solve();
  }
}

solve();