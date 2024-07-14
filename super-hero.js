class superHero {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
//exporting the instance
//module.exports = new superHero("Batman");

//exporting the class itself
module.exports=superHero;
