function sum(...numbers) {
   return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(5, 10, 15, 20))