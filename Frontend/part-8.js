//array method
let student=
[
    {
        name:"John",
        age:25,
        marks:96.4
    },
    {
        name:"Meet",
        age:18,
        marks:99.12
    },
    {
        name:"Rahul",
        age:30,
        marks:87.5
    }
]
student.forEach((student)=>{
    console.log(student);
    console.log(student.name);
    console.log(student.age);
})

//map&fillter
let gpa=student.map((el)=>
{
    return el.marks/10;
})
console.log(gpa);
//filtter
let num=[1,2,3,4,5,6,7,8]
let even=num.filter((el)=>{
    return el%2==0;

})
let odd=num.filter((el)=>{
    return el%2!=0;
})
console.log(odd);
console.log(even);

//reduce method

console.log(
    num.reduce((res,el)=>{
        return res+el;
    })
)
//find max num using reduce method
let max=num.reduce((max,el)=>
{
    if(max<el)
    {
        return el;
    }
    else{
        return max;
    }
}
)
//practice qution 
console.log(max);
let x=[10,20,50,10]
let m10=x.every((el)=>{
    return el%10==0;
})
console.log(m10);

//find min number in array
let min=num.reduce((min,el)=>{
    if(el<min)
    {
        return el;
    }
    else{
        return min;
    }
})
console.log(min);

//defualt parameteleter
function sum(a,b=2)
{
    return a+b;

}
let sum1=sum(2);
let sum2=sum(2,3);
console.log(sum1,sum2);

//spred with array or string
let pnum=[1,3,2,5,3,7,0,4];
let newArr=[...pnum];
console.log(newArr);
let newString=[..."hello"];
console.log(newString);


//

