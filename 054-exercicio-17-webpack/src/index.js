import './styles/index.css'

const hello = () => console.log(`It works! ${1+1}`)

hello()

document.getElementById('emoji').addEventListener('click', function(){
  alert('hello')
})