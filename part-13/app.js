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
    
});

//sending headers with api req

const url3 = "https://icanhazdadjoke.com/";
async function getJokes() 
{
    try
    {
    const config = { headers : { Accept : "application/json"} };
    let res = await axios.get(url3 , config);
    console.log(res.data.joke);
    }
    catch(err)
    {
        console.log(err);
    }
}


//Activity

    let url4="http://universities.hipolabs.com/search?country=";
    let btn3 = document.querySelector("#third");

    btn3.addEventListener("click",async ()=>
    {
        let input = document.querySelector("input");
        let country = document.querySelector("input").value;
        console.log(country);
        input.value = " ";
        let colArr = await getCol(country);
        show(colArr);
        
    });

    function show(colArr)
    {
        
        let ul = document.querySelector("#list");
        ul.innerText=" ";
        for (col of colArr)
        {
            let li = document.createElement("li");
            li.innerText = col.name;
            ul.appendChild(li);
             
        }
        
        
    }
    

    async function getCol(country)
    {
        try
        {
        let res = await axios.get(url4 + country);
        return res.data;
        }
        catch(err)
        {
            console.log(err);
            return alert("Collage Not found");
        }
    }
