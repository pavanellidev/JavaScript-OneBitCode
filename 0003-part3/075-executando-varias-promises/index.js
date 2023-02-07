function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !=='number') {
      reject('arguments must be of type number')
    } else {
      resolve(a + b)
    }
  })
}

function asyncSubstract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !=='number') {
      reject('arguments must be of type number')
    } else {
      resolve(a - b)
    }
  })
}

const sumResult = asyncSum(50, 33)
const substractResult = asyncSubstract(50, 21)

Promise.all([sumResult, substractResult]).then(results => {
  console.log(results)
}).catch(err => {
  console.log(err)
})