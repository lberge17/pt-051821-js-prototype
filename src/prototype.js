function Food(name, cuisine){
  this.name = name
  this.cuisine = cuisine

  // this.order = function(){
  //   console.log(`I would like to order the ${this.name}`)
  // }
}

Food.prototype.order = function(){
  console.log(`I would like to order the ${this.name}`)
}

function ItalianFood(name){
  Food.call(this, name, "italian")
}

ItalianFood.prototype = Object.create(Food.prototype)

const pasta = new ItalianFood("pasta")
const pho = new Food("pho", "vietnamese")
console.dir(pasta)

pasta.order()
pho.order()

console.log(pasta.order === pho.order)