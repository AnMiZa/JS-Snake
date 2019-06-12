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

let foodX
let foodY



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

    const didEatFood = head.x === foodX && head.y === foodY
    if (didEatFood) {
        createFood()
    } else {
        snake.pop()
    }
    const isSnakeAtBorderXRight = head.x === canvas.width
    const isSnakeAtBorderXLeft = head.x === -15
    const isSnakeAtBorderYDown = head.y === canvas.height
    const isSnakeAtBorderYUp = head.y === -15
    if (isSnakeAtBorderXRight) {
        head.x = 0
    } else if (isSnakeAtBorderXLeft) {
        head.x = canvas.width
    } else if (isSnakeAtBorderYDown) {
        head.y = 0
    } else if (isSnakeAtBorderYUp) {
        head.y = canvas.height
    }
}

function changeDirection(event) {
    const LEFT_KEY = 37
    const RIGHT_KEY = 39
    const UP_KEY = 38
    const DOWN_KEY = 40

    const keyPressed = event.keyCode

    const isGoingUp = dy === -15
    const isGoingDown = dy === 15
    const isGoingRight = dx === 15
    const isGoingLeft = dx === -15

    switch (keyPressed) {
        case LEFT_KEY:
            if (!isGoingRight) {
                dx = -15
                dy = 0
                break
            }
            case RIGHT_KEY:
                if (!isGoingLeft) {
                    dx = 15
                    dy = 0
                    break
                }
                case UP_KEY:
                    if (!isGoingDown) {
                        dx = 0
                        dy = -15
                        break
                    }
                    case DOWN_KEY:
                        if (!isGoingUp) {
                            dx = 0
                            dy = 15
                            break
                        }
                        default:
                            break
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 15) * 15
}

function createFood() {
    foodX = randomNumber(0, canvas.width - 15)
    foodY = randomNumber(0, canvas.width - 15)

    snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x === foodX && part.y === foodY
        if (foodIsOnSnake) {
            createFood()
        }
    })
}

function drawFood() {
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'green'
    ctx.strokeRect(foodX, foodY, 15, 15)
    ctx.fillRect(foodX, foodY, 15, 15)
}



clearCanvas()
drawSnake()
createFood()


setInterval(() => {
    clearCanvas()
    moveSnake()
    drawSnake()
    drawFood()
}, 100)