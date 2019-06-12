const body = document.querySelector('body')

const canvas = document.createElement('canvas')

canvas.setAttribute('width', '600px')
canvas.setAttribute('height', '600px')

body.appendChild(canvas)

const ctx = canvas.getContext('2d')

document.addEventListener('keydown', changeDirection)

let snake = [{
        x: 45,
        y: 30
    },
    {
        x: 30,
        y: 30
    },
    {
        x: 15,
        y: 30
    }
]

let dx = 15
let dy = 0



function clearCanvas() {
    ctx.fillStyle = '#ccc'
    ctx.fillRect(0, 0, 600, 600)
}

function drawSnake() {
    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'black'
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, 15, 15)
        ctx.strokeRect(part.x, part.y, 15, 15)
    })
}

function moveSnake() {
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    }
    snake.unshift(head)
    snake.pop()

}

function changeDirection(event) {
    const LEFT_KEY = 37
    const RIGHT_KEY = 39
    const UP_KEY = 38
    const DOWN_KEY = 40

    const keyPressed = event.keyCode

    switch (keyPressed) {
        case LEFT_KEY:
            dx = -15
            dy = 0
            break
        case RIGHT_KEY:
            dx = 15
            dy = 0
            break
        case UP_KEY:
            dx = 0
            dy = -15
            break
        case DOWN_KEY:
            dx = 0
            dy = 15
            break
        default:
            break
    }
}

clearCanvas()
drawSnake()


setInterval(() => {
    clearCanvas()
    moveSnake()
    drawSnake()
}, 1000)