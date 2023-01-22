const dayjs = require('dayjs')

function birthday(date) {
   const birthday = dayjs(date)
   const today = dayjs()

   const ageInYears = today.diff(birthday, 'year')
   const nextBirthday = birthday.add(ageInYears + 1, 'year')
   const daysToNB = nextBirthday.diff(today, 'day') + 1

   console.log(`Idade: ${ageInYears}`)
   console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY dddd')}`)
   console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNB}`)
}

birthday('1987-10-16')