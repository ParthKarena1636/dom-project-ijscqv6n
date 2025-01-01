const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button")
// console.log(buttons)

document.addEventListener('click',(e)=>{
  const color = e.target.id;
  body.style.backgroundColor = e.target.id;
})