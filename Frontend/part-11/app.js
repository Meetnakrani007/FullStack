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
// call back hell & //refactoring color code using of promises

h1 = document.querySelector("h1");
function changeColor(color,delay)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
    {
        h1.style.color= color ;
        resolve("Color update");
    },delay);    
    }   
)}

    changeColor("red",1000)
    .then(()=>
    {
        console.log("red color was completed");
        return changeColor("orange",1000);
    })
    .then(()=>
    {
        console.log("orange color was completed");
        return changeColor("green",1000);
    })
    .then(()=>
    {
        console.log("green color was completed");
        return changeColor("blue",1000);
    })
    .then(()=>
    {
        console.log("blue color was completed");
        return changeColor("yellow",1000);
    })
    .then(()=>
    {
        console.log("yellow color was completed");
        return changeColor("gray",1000);
    })
    .then(()=>
    {
        console.log("gray color was completed");
        return changeColor("pink",1000);
    })
    .then(()=>
    {
        console.log("pink color was completed");
        return changeColor("purple",1000);
    })
    .then(()=>
    {
        console.log("purple color was completed");
        return changeColor("cyan",1000);
    })
    .then(()=>
    {
        console.log("cyan color was completed");
        
    })

// changeColor ("red", 1000,()=>
// {
//     changeColor ("orange", 1000,()=>
//     {
//         changeColor ("green", 1000,()=>
//         {
//             changeColor ("yellow", 1000,()=>
//             {
//                 changeColor ("blue", 1000,)
//             });
//         })
//     });
// });

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