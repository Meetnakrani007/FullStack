let url = "https://catfact.ninja/fact";
let p = document.querySelector("#result");
let h1 = document.querySelector("h1");
let btn = document.querySelector("#first");

// cat api

async function getFact()
{
    try
    {
        let res = await axios.get(url);
        console.log("Successfuly update") ;
        return res.data.fact;  
    }
   catch(err)
   {
    promot("error found = ",err);
   }
}
btn.addEventListener("click",async ()=>
{
    let fact = await getFact();
    p.innerText = fact;
})

//dog api

let btn2 = document.querySelector("#second");

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImg()
{
    try
    {
        let res = await axios.get(url2);
        return res.data.message;   
    }
   catch(err)
   {
    alert("Img Not found");
   }
}
    btn2.addEventListener("click",async ()=>
{
    let link = await getImg();
    console.log(link);    
    let img = document.querySelector("img");
    img.setAttribute("src",link);
    
})

