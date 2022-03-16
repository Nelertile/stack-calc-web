import './style/style.css'

const out = document.querySelector('#out')!
const input = document.querySelector('#input')!
input.addEventListener('change', calculate)

function calculate(){
  if(input.value < 0) input.value = 0
  if(input.value == 0) return out.textContent = "That ain't no items!"
  if(input.value < 64) return out.textContent = "That's not even a stack..."
  
  const stack: number = Math.ceil(input.value / 64)
  const shulker: number = Math.ceil(stack / 27)

  if(shulker > 1) return out.textContent = `Stack: ${stack}\nShulker: ${shulker}`
  return out.textContent = `Stack: ${stack}`
}