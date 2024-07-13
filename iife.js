//Immediate Invoked Function Expression(IIFE pattern)
//In thiseach function has its private scope
//so there is no conflict of variables naming
//Node.js using this IIFE pattern to get rid of naming conflicts of variable and functions
//In Node.js, we can have the same function name and variables in modules due to IIFE
//each Module function has 5 parameters wrapped  "exports,modules,require,__filename,__dirname"

// (function(exports,modules,require,__filename,__dirname){
//   const superHero="Batman"
//   console.log(superHero)
//    })();


(function (message) {
  const superHero = "Batman";
  console.log(message,superHero);
})("Hello");

(function (message) {
  const superHero = "Superman";
  console.log(message,superHero);
})("Hey");
