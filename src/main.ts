import './style/style.css'

const calc = document.querySelector('button')!
const out = document.querySelector('.out')!
const input = document.querySelector('.input')!
calc.addEventListener('click', calculate)

function calculate(){
  if(!input.value) return out.textContent = "That ain't no items!"
  if(input.value < 64) return out.textContent = "That's not even a stack..."
  
  const stack: number = Math.ceil(input.value / 64)
  const shulker: number = Math.ceil(stack / 27)

  if(shulker > 1) return out.textContent = `Stack: ${stack}\nShulker: ${shulker}`
  return out.textContent = `Stack: ${stack}`
}