let para1=document.createElement('p');
para1.innerText='Hey, i am red '
para1.style.color='red';
document.querySelector('body').appendChild(para1);;


let h3=document.createElement('h3');
h3.innerText="i'm blue h3"
h3.style.color='blue';
document.querySelector('body').appendChild(h3);;


let div=document.createElement('div');

let h1=document.createElement('h1');
let para2=document.createElement('p');

h1.innerText='i am in a div';
para2.innerText='ME TOO!';

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector('body').prepend(div);