// Array flat, aplanar los arrays
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());
console.log(array.flat(2));

// Flat Map
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

// Remover espacios en blanco
let hello = '         hello world    '
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())

// try catch ERROR
try {

}
catch { // podemos omitir el error, y utilizarlo directamente en el catch
  error
}

// Array a Objetos
let entries =  [["name", "Julian"], ["Age", 28]];
console.log(Object.fromEntries(entries))


// Symbol.description
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description)
