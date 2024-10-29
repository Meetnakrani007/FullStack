let btns=document.querySelectorAll("button");
for(btn of btns)
{
    btn.onclick=clickMe;
    btn.onmouseenter=function(){
        console.log("you entered mouse button");
    }
}
function clickMe()
{
    alert("It was liked")
}

//keybord event

let inp=document.querySelector("input");

inp.addEventListener("keydown",function(event)
{
    if(event.code == "KeyW")
    {
        console.log("Your character going up");
    }
    else if(event.code == "KeyA")
    {
        console.log("Your character going left");
    }
    else if(event.code == "KeyD")
    {
        console.log("Your character going right");
    }
    else if(event.code == "KeyS")
    {
        console.log("Your character going down");
    }
    else if(event.code == "Space")
    {
        console.log("Your character doing jump");
    }
    else if(event.code == "ShiftLeft")
    {
        console.log("Your character doing sit");
    }
    
})
// FOR FIND KEY AND CODE 
// inp.addEventListener("keydown",function(event)
// {
//     console.log("key ==",event.key);
//     console.log("code ==",event.code);
// })


