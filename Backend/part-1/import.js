import {sum,mul,div} from "./math.js";
import { generate } from "random-words";
console.log(sum(1,2));
console.log(mul(2,3));
console.log(div(4,2));
let n=10
for(let i=0;i<n;i++)
{
    console.log(generate());
}
