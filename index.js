const combine = require('css-combine')
const fs = require('fs')
const raw = './main.css'

combine(raw).pipe(
  fs.createWriteStream('./out.css')
)