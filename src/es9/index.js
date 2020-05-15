// Operador de reposo
const obj = {
  name: 'Julian',
  age: 28,
  country: 'CO'
};

let { country, ...all } = obj;
console.log(all); // Si quiere todos los elementos menos country

//
// Operador de reposo
const obj = {
  name: 'Julian',
  age: 28
};
const obj1 = {
  ...obj,
  country: 'CO'
}
console.log(obj1)



//
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-05-12')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)
