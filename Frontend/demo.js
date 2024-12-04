 let price='S';
if(price === 'XL')
{
    console.log("price is 250")
}
if(price === 'L')
{
    console.log("size is 200")
}
if(price === 'M')
{
    console.log("price is 100")
}
if(price === 'S')
{
    console.log("price is 50")
}

let latter = "aimple";
if((latter[0]==='a') && (latter.length > 3))
{
    console.log("Your string is good")
}
else
{
    console.log("your string is not good")
}
let day=0;
switch(day)
{
    case 1:
        {
            console.log("sunday")
            break;
        }
    case 2:
        {
            console.log("monday")
            break;
        }
    case 3:
        {
             console.log("tuesday")
             break;
        }
    case 4:
        {
            console.log("wednesday")
            break;
        }
    case 5:
        {
            console.log("thursday")
            break;
        }
    case 6:
        {
            console.log("friday")
            break;
        }
    case 7:
        {
            console.log("saturday")
            break;
        }
        default:
            {
                console.log("inavaild day")
            }

}
console.error("This is error")
console.warn("This is warning")

// let msg='    hello    '
// let pass=prompt("set your password");
// console.log(pass.trim());
// let newpass = pass.trim();
// console.log(newpass.toUpperCase())
let str="help!";
console.log(str.toUpperCase())
let name="Apnacollege";


const fav='KGF';
let guess=prompt("Guess the favourite movie :");
while((guess!=fav) && (guess!=quit))
{
    console.log("Wrong")
   guess = prompt("Guess the favourite movie :");
}
