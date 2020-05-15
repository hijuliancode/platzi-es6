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
