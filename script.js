const body = document.querySelector('body')

const canvas = document.createElement('canvas')

canvas.setAttribute('width', '600px')
canvas.setAttribute('height', '600px')

body.appendChild(canvas)

const ctx = canvas.getContext('2d')

ctx.fillStyle = '#ccc'
ctx.fillRect(0, 0, 600, 600)



let snake = [{
        x: 15,
        y: 30
    },
    {
        x: 30,
        y: 30
    },
    {
        x: 45,
        y: 30
    }
]

ctx.fillStyle = 'green'
ctx.strokeStyle = 'black'

snake.forEach(part => {
    ctx.fillRect(part.x, part.y, 15, 15)
    ctx.strokeRect(part.x, part.y, 15, 15)
})