import helloworld from "./hello-world";
import imgSrc from './assets/1.jpg'
import imgSrc1 from './assets/123.png'
import text from './assets/text.txt'

import './style.css'
import './style.less'

import data from './assets/data.xml'
import notes from './assets/data.csv'

import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'


import _ from 'loadsh'

import './async-module.js'

helloworld()

const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)


const img1 = document.createElement('img')
img1.src = imgSrc1
document.body.appendChild(img1)


const block = document.createElement('div')
block.textContent = text
block.classList.add('block-bg')
document.body.appendChild(block)

document.body.classList.add('hello')


console.log(data,notes)


console.log(toml.title,toml.owner.name)
console.log(yaml.title,yaml.owner.name)
console.log(json5.title,json5.owner.name)


console.log(_.join(['index','module'],' '))