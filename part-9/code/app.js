let links=document.querySelectorAll('.box a');


    for(let i=0;i<links.length;i++)
    // {
    //     links[i].style.color='green';
    // }

for(link of links)
{
    link.style.color="purple";
}