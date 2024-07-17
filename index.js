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

// const buffer=new Buffer.from("Rishabh")
// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(buffer.toString())
// buffer.write("IACSD")
// console.log(buffer.toString())

//fs Module(Builtin module)

// const fs = require("node:fs");
// console.log("first");
// const filecontents = fs.readFileSync("./file.txt", "utf-8");
// console.log(filecontents);
// console.log("second");
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
// console.log("Third");

// fs.writeFileSync("./greet.txt", "Enjoying coding in NodeJS,", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file written");
//   }
// });

// fs.writeFile("./greet.txt", "NodeJS is intresting",{flag:'a'}, (error) => {
//   if (error) {
//     console.log();
//   } else {
//     console.log("file written");
//   }
// });

//fs promise module

// const fs = require("node:fs/promises");
// fs.readFile("./greet.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// //fs promise module with async and await

// const fs1 = require("node:fs/promises");
// async function readFile() {
//   try {
//     const data = await fs1.readFile("./file.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile();

//Streams and Pipes
//Four types of streams
//1.Readable Stream Ex. reading from a file
//2.Writtable Stream Ex. writting to a file
//3.Duplex Stream Ex.Sockets
//4.Transform Stream Ex.File Compression

// const fs = require("node:fs");
// const zlib = require("node:zlib");
// const gzip = zlib.createGzip();
// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
// const writtableStream = fs.createWriteStream("./file2.txt");

// // readableStream.on("data", (chunk) => {
// //   console.log(chunk);
// //   writtableStream.write(chunk);
// // });

// readableStream.pipe(writtableStream);

//Http Module and creating a node server
//Json response and Html response
//Html Template
// const http = require("node:http");
// const fs=require("node:fs");
// const server = http.createServer((req, resp) => {
//     // const superHero={
//     //     firstName:'Rishabh',
//     //     lastName:'Jaiswal'
//     // }
//     const name="Rishabh";
//     let html=fs.readFileSync("./index.html","utf-8")
//     html=html.replace("{{name}}",name);
//     //const html=fs.readFileSync("./index.html")
//     //fs.createReadStream(__dirname+"/index.html").pipe(resp);
//   resp.writeHead(200, { "content-type": "text/html" });
//   //resp.end("<h1>Hello Rishabh!!Enjoying NodeJS</h1>");
//   resp.end(html);
// });

// server.listen(3000, () => {
//   console.log("server active and running on port 3000");
// });

//Http Routing

// const http = require("node:http");
// const server = http.createServer((req, resp) => {
//   if (req.url === "/home") {
//     resp.writeHead(200, { "content-type": "text/plain" });
//     resp.end("Home Page");
//   } else if (req.url === "/about") {
//     resp.writeHead(200, { "content-type": "text/plain" });
//     resp.end("About page");
//   } else if (req.url === "/api") {
//     resp.writeHead(200, { "content-type": "application/json" });
//     resp.end(JSON.stringify({ name: "Rishabh", age: 28 }));
//   } else {
//     resp.writeHead(400);
//     resp.end("Error!!Page not Found");
//   }
// });
// server.listen(3000, () => {
//   console.log("Server is Up and running on port 3000");
// });

//Thread Pool
//Below is async method which is blocking,thus  main thread passes the blocking code to thread pool to execute
// const fs = require("node:fs");
// console.log("first");
// fs.readFile("file.txt", "utf-8", (err,data) => {
//   console.log("file contents");
// });

// console.log("second");

//crypto module
//Every method in NodeJs which is having suffix as sync always runs on main thread and is blocking

// const crypto = require("node:crypto");
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash:", Date.now() - start);

//Experiment-2
//Few Async methods like fs.readFile and crypto.pbkdf2 runs on libuv thread pool
// const crypto = require("node:crypto");
// process.env.UV_THREADPOOL_SIZE = 5;
// const MAX_CALLS = 5;
// const start = Date.now();

// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(`Hash: ${i + 1}`, Date.now() - start);
//   });
// }

//libUv Thread pool has 4 threads and can be increased using
//process.env.UV_THREADPOOL_SIZE=5

//Network i/o
//Although both pbkdf2 and https.request methods are Asynchronous but https.request doesnot seems to runs on thread pool
//Because https.request is an Network I/O operation not cpu based.
//Also https.request does not depends on CpU cores
// const https=require("node:https")
// const MAX_CALLS=13;
// const start=Date.now();
// for(let i=0;i<MAX_CALLS;i++){
// https.request("https://www.google.co.in",(res)=>{
//     res.on("data",()=>{});
//     res.on("end",()=>{
//         console.log(`Request: ${i+1}`,Date.now()-start)
//     })
// })
// .end();
// }

//Micro-Task Queues
//Experiment 1
//All javaScript synchronous code takes priority over async code

// console.log("First");
// process.nextTick(() => console.log("This is process.nextTick"));
// console.log("second");

//Experiment 2
//All callbacks in nextClick queue are executed before the callbacks in promise queue

// Promise.resolve().then(() => {
//   console.log("This is promise.resolve 1");
// });
// process.nextTick(() => {
//   console.log("This is process.nextTick 1");
// });

//Experiment 3
//Microtask queues executes before the Timer Queue

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setTimeout(() => console.log("This is setTimeout 2"), 0);
// setTimeout(() => console.log("This is setTimeout 3"), 0);
// process.nextTick(() => console.log("This is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("This is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick of process.nextTick 2");
//   });
// });
// process.nextTick(() => console.log("This is process.nextTick 3"));

// Promise.resolve().then(() => console.log("This is promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("This is promise.resolve 2");
//   process.nextTick(() =>
//     console.log("This is process.nextTick inside of promise.resolve 2")
//   );
//   Promise.resolve().then(() => console.log("This is promise.resolve 3"));
// });

//Experiment 4
//microtask queues callbacks executes between timer queue callbacks

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("This is setTimeout 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick of setTimeout 2");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("This is setTimeout 3");
//   Promise.resolve().then(() =>
//     console.log("This is inner promise.resolve of setTimeout 3")
//   );
// }, 0);
// process.nextTick(() => console.log("This is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("This is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick of process.nextTick 2");
//   });
// });
// process.nextTick(() => console.log("This is process.nextTick 3"));

// Promise.resolve().then(() => console.log("This is promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("This is promise.resolve 2");
//   process.nextTick(() =>
//     console.log("This is process.nextTick inside of promise.resolve 2")
//   );
//   Promise.resolve().then(() => console.log("This is promise.resolve 3"));
// });

//Experiment 5
//callbacks in setTimeout in  timer queue executes in FIFO order

setTimeout(()=>console.log("This is setTimeout 1"),1000)
setTimeout(()=>console.log("This is setTimeout 2"),3000)
setTimeout(()=>console.log("This is setTimeout 3"),500)
