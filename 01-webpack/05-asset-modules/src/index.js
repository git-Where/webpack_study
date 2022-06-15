import helloworld from "./hello-world";
import imgSrc from './assets/1.jpg'
import imgSrc1 from './assets/123.png'
import text from './assets/text.txt'
helloworld()

const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)


const img1 = document.createElement('img')
img1.src = imgSrc1
document.body.appendChild(img1)


const block = document.createElement('div')
block.textContent = text
document.body.appendChild(block)