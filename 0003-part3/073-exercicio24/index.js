function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== 'number' || typeof height !== 'number') {
      reject('arguments must be of type number')
    } else {
      resolve(weight / (height * height))
    }
  })
}

function showImc(weight, height) {
  imc(weight, height).then((result) => {
    console.log(`O resultado do IMC foi de ${result}`)

    if (result < 18.5) console.log('Situação: MAGREZA')
    else if (result < 25) console.log('Situação: NORMAL')
    else if (result < 30) console.log('Situação: SOBREPESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
  }).catch((err) => {
    console.log(err)
  })

  console.log('calculando...')
}

showImc(75, 1.75)
showImc(86, 1.76)
showImc(92, 1.75)
showImc(105, 1.75)