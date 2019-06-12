const body = document.querySelector('body')

const canvas = document.createElement('canvas')

canvas.setAttribute('width', '600px')
canvas.setAttribute('height', '600px')

body.appendChild(canvas)

const ctx = canvas.getContext('2d')

ctx.fillStyle = '#ccc'
ctx.fillRect(0, 0, 600, 600)