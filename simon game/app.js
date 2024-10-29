let gameSeq=[];
let userSeq=[];


let btns=["pink","orange","blue","purple"];

let level = 0;
let highScore=level;
let started = false;
let h2=document.querySelector("h2");
let h3 =document.querySelector("h3");

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        
        started = true;

        levelUp();
    }
    
});
function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash")
    },150);
}
function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function()
    {
        btn.classList.remove("userFlash")
    },150);
}

function levelUp()
{
    userSeq=[];
    
    level++;
    h2.innerText=`Level ${level}`;

    let ranIdx=Math.floor(Math.random() * 4);
    let randColor=btns[ranIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    gameFlash(randBtn);
    gameSeq.push(randColor);
    // started=false;
}

function check(idx)
{
    
    if(gameSeq[idx] == userSeq[idx])
    {
        if(gameSeq.length == userSeq.length)
        {
            setTimeout(levelUp,1000)
            
        }
    }
    else
    {
        let prevLevel=level;
        if(prevLevel<=level)
        {
            h3.innerHTML=`Your Highest score is : ${level}`
        }
        else{
            h3.innerHTML=`Your Highest score is : ${prevLevel}`
        }
        h2.innerHTML=`Game over! Your score is <b> ${level} </b> <br> Press any key for restart the game`
       
       
       
        reset();
        
    }
}

function userPress()
{
    let btn=this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn")
{
    for(btn of allBtns)
    {
        btn.addEventListener("click",userPress)
    }
    
}
function reset()
{
    started = false;
    userSeq = [];
    gameSeq = [];
    level=0;
}

