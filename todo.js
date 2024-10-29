let todo =[];
let req = prompt("Please enter your choice");
while(true)
{
    
    if(req=="quit")
    {
        console.log("Exiting....");
        break;
    }
    if(req=="list")
    {
        console.log.apply("-----------------------------------");
        for(i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
        console.log("-----------------------------------");
    }
    else if(req=="add")
        {
         let task = prompt("Please enter the task you want to add:");
         todo.push(task);
         console.log("Task added");  
        }
        else if(req=="delete")
        {
            let idx = prompt("Please enter the task index you want to delete:");
            todo.splice(idx,1);
            console.log("Task deleted"); 
        }
        else{
            console.log("Wrong Request");
        }
         req=prompt("Please enter your choice");
}