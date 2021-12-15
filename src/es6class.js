class Food {
  constructor(name, cuisine){
    this.name = name
    this.cuisine = cuisine
  }

  order(){
    console.log(`I would like to order the ${this.name} from the ${this.cuisine} menu`)
  }
}

class ItalianFood extends Food {
  constructor(name){
    super(name, "italian")
  }
}

const pho = new Food("pho", "vietnamese")
const pizza = new ItalianFood("pizza")

pho.order()
pizza.order()

console.log(pho.order === pizza.order)

