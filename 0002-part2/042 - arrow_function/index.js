function normalSum(a, b) {
   return a + b
}

console.log(`Soma normal: ${normalSum(2,4)}`)

const anonymousSum = function (a, b) {
   return a + b
}

console.log(`Soma anônima: ${anonymousSum(3, 3)}`)

const arrowSum = (a,b) => {return a + b}

console.log(`Soma arrow function: ${arrowSum(4, 4)}`)

const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(5, 4)}`)

const times = ['Palmeiras', 'Vasco', 'Corinthians', 'Ponte-Preta']

const comecaComP = times.filter(time => time[0] === 'P')

console.log(comecaComP)