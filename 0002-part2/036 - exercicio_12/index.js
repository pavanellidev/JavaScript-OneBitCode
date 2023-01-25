const addBtn = document.getElementById('add-btn');
const hide = document.getElementById('hide')
let techs = []

hide.classList

function add() {
   hide.classList.toggle('hide')
}

function cadastrar() {
   let value1 = document.getElementById('tecnologia').value
   let value2 = document.querySelector('input [type="radio"]').value
   techs += value1 + " - " + value2

   console.log(techs)
}