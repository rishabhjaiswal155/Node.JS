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


const superHero=require("./super-hero")

const batman =new superHero("Batman")
console.log(batman.getName())
batman.setName("Superman")
console.log(batman.getName())

const hanuman=new superHero("Hanuman")
console.log(hanuman.getName())