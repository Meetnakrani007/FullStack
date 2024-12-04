let btn1=document.querySelector("#add");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let i=document.createElement("i");
let item=document.querySelector("li");

    btn1.addEventListener("click",function()
{
    
    let item=document.createElement("li");
    item.innerText = inp.value;

    let i=document.createElement("i");
    i.classList.add("fa-solid","fa-square-minus");
    item.appendChild(i);
    
    

    ul.appendChild(item);
    inp.value="";
  
});

//keybord event when press enter key auto add list
inp.addEventListener("keydown",function(event)
{
    
    if(event.code == "Enter")
    {
        let item=document.createElement("li");
        item.innerText = inp.value;
    
        let i=document.createElement("i");
        i.classList.add("fa-solid","fa-square-minus");
        item.appendChild(i);
        
        
    
        ul.appendChild(item);
        inp.value="";

    }
    
  
});





ul.addEventListener("click",function(event)
{
    if(event.target.nodeName == "I")
    {
        let par=event.target.parentElement;
        par.remove();
    }
    else
    {
        alert("You can't romove this");
    }
})

