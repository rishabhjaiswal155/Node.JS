//pattern-1 and pattern-2
//when exporting as default,we can import module with any name
// import add from "./math-esm.mjs"
// console.log(add(2,3))

//pattern-3

// import math from "./math-esm.mjs"
// const {add,sub}=math
// console.log(add(2,3))
// console.log(sub(2,3))


//pattern-4 way1 and way2
//When using named export,import it with same name use while export 
// import * as math from "./math-esm.mjs"
// const {add,sub}=math
import {add,sub} from "./math-esm.mjs"
console.log(add(2,3))
console.log(sub(2,3))