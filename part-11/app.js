function one()
{
    return 1;
}
function two()
{
    return  one() + one();
}
function three()
{
    let ans =  two() + one();
    
    console.log(ans);
}

three();
// call back hell

h1 = document.querySelector("h1");
function changeColor(color,delay,nextColorChange)
{
    setTimeout(()=>
    {
        h1.style.color= color ;
        nextColorChange();
    },delay);
   
}
changeColor ("red", 1000,()=>
{
    changeColor ("orange", 1000,()=>
    {
        changeColor ("green", 1000,()=>
        {
            changeColor ("yellow", 1000,()=>
            {
                changeColor ("blue", 1000,)
            });
        })
    });
});

//call back nesting -> callback hell


// function userData()
// {
//     let data = prompt("Enter Your data");
//     savetoDb(data,()=>{
//         console.log("Your data is saved...",data);
//     },()=>
//     {
//         console.log("Your connection is slow...");
//     });
// }
// userData();
// function savetoDb(data,success,failure)
// {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
   
    
//     if(internetSpeed > 4)
//     {
//         success(data);
//         userData();
        
//     }
//     else
//     {
//         failure();
//     }
// }

//resolve and reject promises


function savetoDb(data)
{
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
   
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1; 
    if(internetSpeed > 4)
    {
        success("data is saved");
        
        
    }
    else
    {
        failure("Please try again ...");
    }
    });
}


//then() and catch() & promise chaining



savetoDb("Meet Nakrani").then((result)=>
{
    console.log("Success : data is saved , data 1 saved",result);
   return  savetoDb("hello world")
}
)
.then((result)=>{
    console.log("Success : data is saved , data 2 saved",result);
    return savetoDb("Delta batch")
})
.then((result)=>{
    console.log("Success : data is saved , data 3 saved",result);
})
.catch((error)=>
{
    console.log("Failure : poor connection....",error);
})