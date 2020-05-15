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