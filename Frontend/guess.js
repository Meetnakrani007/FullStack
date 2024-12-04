const max=prompt("Enter the maximum number:");
const random=Math.floor(Math.random()*max)+1;
alert("!!!!!!You have only 6 chance!!!!!!")
let guess=prompt("Guess the number:")
let attempt=6,i=1;
while(true){
    if(guess=="quit")
    {
        console.log("Exiting....")
        break; 
    }
    if(guess==random)
    {
        console.log("your guess is correct!! random number is :",random);
        break;
    }
    else if(guess<random)
    {
        guess=prompt("Hint :Your number is too small,Please Guess again:");
        console.log(i+1);
    }
    else
    {
        guess=prompt("Hint :Your number is too large,Please Guess again:");
        console.log(i+1);
    }
    i++;
    if(i==attempt)
    {
        console.log("You have lost your all your attempts");
        console.log(random);
        break;
    }
    if(i==6)
    {
        setInterval(()=>{alert("For Restart Game Refresh The Page"),2000;});
            
    }
   
}
