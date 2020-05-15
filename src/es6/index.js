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
