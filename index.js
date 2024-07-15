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
// const math=require("./math")
// console.log(math.add(2,3))
// console.log(math.sub(2,3))

//Importing Json
// const data=require("./data.json")
// console.log(data.address.city)

//Path Modules(Built in modules of node)
// const path=require("node:path")
// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))

// console.log(path.format(path.parse(__filename)))
// console.log(path.format(path.parse(__dirname)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))

// console.log(path.join("folder1","folder2","index.html"))
// console.log(path.join("/folder1","folder2","index.html"))
// console.log(path.join("/folder1","//folder2","index.html"))
// console.log(path.join("/folder1","//folder2","../index.html"))

// console.log(path.resolve("folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","../index.html"))
// console.log(path.resolve(__dirname,"data.json"))

//Events Module

// const EventEmitter=require("node:events")
// const emitter=new EventEmitter()

// emitter.on("order-pizza",(size,topping)=>{
//     console.log(`order received Baking a ${size} pizza with ${topping}`)
// })

// emitter.on("order-pizza",(size)=>{
//     if(size==='large'){
//     console.log("Serving Complimentary drinks enjoy!!!")}
// })

// emitter.emit("order-pizza","large","Mushroom")

//Extending Event-Emitter

// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine");
// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();
// pizzaShop.on("order", (size, topping) => {
//   console.log(` order received !! Baking ${size} pizza with ${topping}`);
//   drinkMachine.serveDrink(size);
// });
// pizzaShop.order("large", "Panner");
// pizzaShop.displayorderNumber();
// pizzaShop.order("small", "Magherita");
// pizzaShop.displayorderNumber();


//Character sets,Encoding,Streams and Buffers

const buffer=new Buffer.from("Rishabh")
console.log(buffer)
console.log(buffer.toJSON())
console.log(buffer.toString())
buffer.write("IACSD")
console.log(buffer.toString())


