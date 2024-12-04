//async keyword or function 
async function greet()
{
    
    return "hello";
}
greet()
.then(()=>{
    console.log("promise successful return");
})
.catch(()=>
{
    console.log("promise unsuccessful return");
})

//await keyword or function pause the async function or async funtion call all the function at the same time therefor we use await funtion 

function getNum()
{

    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    })

}
async function demo1()
{
   await getNum();
   await getNum();
   await getNum();
   await getNum();
   await getNum();
}
//use await keyword to the color change code which is in part 11


h1 = document.querySelector("h1");
function changeColor(color,delay,size)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
    {
        let num = Math.floor(Math.random() * 10)+1;
        if (num < 3)
        {
            console.log("promise rejected");
            reject();
        }
        h1.style.color= color ;
        h1.style.fontSize = size;
        resolve("Color update");
    },delay);    
    }   
)}

async function demo()
{
    try{
        await changeColor("red",1000,"20px");
        await changeColor("orange",1000,"30px");
        await changeColor("green",1000,"40px");
        await changeColor("blue",1000,"50px");
        await changeColor("yellow",1000,"60px");
        await changeColor("cyan",1000,"65px");
        await changeColor("gray",1000,"70px");
        await changeColor("pink",1000,"75px");
        await changeColor("purple",1000,"80px");
    
    }
    catch(err)
    {
        console.log(err);
    }

    let a =4;
    console.log(a+9);
    console.log(a+18);

}

demo();


//json

let jsonRes = '{"message":"https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2695.jpg","status":"success"}';
let data = JSON.parse(jsonRes);
console.log(data.message);
console.log(data.status);



//first api req using of fetch also use await and async

let url = "https://catfact.ninja/fact";

fetch(url)

// without async function 


// .then((response)=>{
    
//     return response.json()
// })
// .then((data1)=>{
//     console.log("Data 1 = ",data1.fact);
//     return fetch(url)
// })
// .then((response)=>{
//     return response.json()
// })
// .then((data2)=>{
//     console.log("Data 2 = ",data2.fact);   
// })
// .catch((err)=>{
//     console.log(err);
// })




async function getFact()
{
    try
    {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
   catch(err)
   {
    console.log("error found = ",err);
   }
}
getFact();