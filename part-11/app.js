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

