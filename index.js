//Loading Local Modules into another module using require function

// const addFn = require("./add");
// console.log("Hello Node from index.js");
// const sum = addFn(2, 3);
// console.log(sum);
// const sum1 = addFn(10, 5);
// console.log(sum1);


//Module Scope and Immediate Invoked Function Expression(IIFE)
//Each loaded module has private scope to avoid conflicts in varable and Functions name

// require("./batman")
// require("./superman")


//Module Caching

// const superHero=require("./super-hero")
// console.log(superHero.getName())
// superHero.setName("Superman")
// console.log(superHero.getName())

// const hanuman=require("./super-hero")
// console.log(hanuman.getName())


// const superHero=require("./super-hero")

// const batman =new superHero("Batman")
// console.log(batman.getName())
// batman.setName("Superman")
// console.log(batman.getName())

// const hanuman=new superHero("Hanuman")
// console.log(hanuman.getName())


//Import export patterns
//pattern-1
// const add=require("./math")
// console.log(add(2,3))

//pattern-2
// const add=require("./math")
// console.log(add(2,3))

//pattern-3
// const math=require("./math")
// //destructuring the object
// const {add,sub}=math
// // console.log(math.add(2,3))
// // console.log(math.sub(2,3))
// console.log(add(2,3))
// console.log(sub(2,3))

//pattern-4
// const math=require("./math")
// console.log(math.add(2,3))
// console.log(math.sub(2,3))


//pattern-5
// const math=require("./math")
// console.log(math.add(2,3))

//module.exports vs exports
//This gives error with only exports
const math=require("./math")
console.log(math.add(2,3))
console.log(math.sub(2,3))