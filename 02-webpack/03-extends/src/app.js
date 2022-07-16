import style from "./app.css"

const div = document.createElement('div')
div.textContent = 'hello postcss'
div.classList.add(style.box)
document.body.appendChild(div)