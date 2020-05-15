// Object.entries : Nos permite devolver la clave y valores en una matriz
const data = {
  frontend: 'Ginna',
  backend: 'Julian',
  designer: 'Meraki'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// Object.values : Devuelve los valores de un objeto a un arreglo
const data = {
  frontend: 'Ginna',
  backend: 'Julian',
  designer: 'Meraki'
}
const values = Object.values(data)
console.log(values)
console.log(values.length)

// 

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' -----'))

// Async & Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

const helloAsync = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello)
  }
  catch (error) {
    console.log('ERRORR => ', error)
  }
}

helloAsync()
