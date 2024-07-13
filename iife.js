//Immediate Invoked Function Expression(IIFE pattern)
//In this,each function has its private scope
//so there is no conflict of variables naming
//Node.js using this IIFE pattern to get rid of naming conflicts of variable and functions
//In Node.js, we can have the same function name and variables in modules due to IIFE

(function () {
  const superHero = "Batman";
  console.log(superHero);
})();

(function () {
  const superHero = "Superman";
  console.log(superHero);
})();
