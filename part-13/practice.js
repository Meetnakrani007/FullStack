let url="http://universities.hipolabs.com/searchstate-province=";
let btn = document.querySelector("button");



btn.addEventListener("click", async ()=>
{
    
    let state = document.querySelector("input").value;
    let colArr = await getCol(state);
    show(colArr);
    
})


function show(colArr)
{
    let ul = document.querySelector("#list");
    ul.innerText=" ";
    for(col of colArr)
    {
        let li=document.createElement("li");
        li.innerText=col.name;
        ul.appendChild(li);
    }
}


async function getCol(state)
{
    try
    {
        let res = await axios.get(url + state);
       return res.data;
    }
    catch(err)
    {
        console.log("Error",log);
        return [];
    }
    
}
getCol();