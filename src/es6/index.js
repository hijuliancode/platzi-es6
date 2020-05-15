// Default Params

// Old Mode
function newFunction(name, age, country) {
  var name = name || 'Julian'
  var age = age || 28
  var country = country || 'MX'
  console.log(name, age, country)
}

// ES6
function newFunction2(name = 'Valentina', age = 8, country = 'CO') {
  console.log(name, age, country)
}

newFunction2()
newFunction2('Meraki', 9, 'FI')



// Multilinea
let lorem = "Qui consequatur. Commodi. Ipsum ve duis yet minima \n"
+ "Otra frase epica que necesitamos.";

let lorem2 = `Otra frase epica que necesitamos
Ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

// Destructuración
let person = {
  'name': 'Julian',
  'age': '28',
  'country': 'CO'
}

let { name, age, country } = person

console.log(name, age, country)

// Spread Operator
let team1 = ['Julian', 'Edwin', 'Carlos']
let team2 = ['Valentina', 'Ginna', 'Meraki']

let education = ['David', ...team1, ...team2]

console.log(education)

// Var, Let, Const
{
  var globalVar = 'Global Var'
}
{
  var localLet = 'Local Let'
  console.log(localLet)
}
console.log(globalVar)

const a = 'b'
// a = 'a' // ERROR
console.log(a)


/// Arrow Functions, Promises and Parameters on objects

// Parameters on Objects
let name = 'Julian';
let age = 28;
// es5
obj = { name: name, age: age };
// es6
obj2 = { name, age };

console.log(obj2)

// Arrow functions
const names = [
  { name: 'Julian', age: 28 },
  { name: 'Meraki', age: 8 }
]
const listOfNames = names.map(item => console.log(item.name))

// Promises

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!')
    } else {
      reject('Ups!!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola!'))
  .catch(error => console.log(error));

// Classes
class calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator()
console.log(calc.sum(20, 10))
