const fav = "kgf";

let guess = prompt("Guess the favourite movie :");
let i=1
while( (guess != fav) && (guess != "quit")&&(i<5))
{
    console.log("Wrong")
   guess = prompt("Wrong Guess Please try again :");
   i++;
}
if(i>=5)
{
    alert("You have time out");
}
