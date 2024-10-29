let form=document.querySelector("form");

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert(`Your user id is ${user.value} and your password is ${pass.value}`)

})

//text editor

let inp=document.querySelector("input");
let p=document.querySelector("p");
inp.addEventListener("input",function()
{
    console.log(this.value);
    p.innerText=inp.value;
})