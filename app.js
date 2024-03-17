const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 1100
const boardHeight= 700

const userStart = [49, 1]
let currentPosition = userStart

const ballStart = [53, 6]
let ballCurrentPosition = ballStart

const colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

//Blocks
class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
        this.topLeft = [xAxis, yAxis + blockHeight]
        //this.color = color
    }
}

//add blocks
const blocks = [
    new Block (10, 95),
    new Block (20, 95),
    new Block (30, 95),
    new Block (40, 95),
    new Block (50, 95),
    new Block (60, 95),
    new Block (70, 95),
    new Block (80, 95),
    new Block (90, 95)
]

drawBlock()

//add user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
// Render user
drawUser()

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
// Render ball
drawBall()


//Render a block at it's set location with a randomized color
function drawBlock(){
    for(let i =0; i < blocks.length; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = block.xAxis
        block.style.bottom = block.yAxis
        //scoreDisplay.textContent = colorOptions[Math.round((Math.random() * 5))] ~Debug line for troubleshooting
        block.color = colorOptions[Math.round((Math.random() * 5))]
        block.style.backgroundColor = block.color
        block.style.backgroundColor = block.color
        grid.appendChild(block)
    }
}


//Render user at location specified by the currentPosition array
function drawUser() {
    user.style.left = currentPosition[0] + '%'
    user.style.bottom = currentPosition[1] + '%'
}

//Render ball at location specified by the ballCurrentPosition array
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + '%'
    ball.style.bottom = ballCurrentPosition[1] + '%'
}




//Notes: Add pause on block hit for movement to give user time to input another color if needed; combo for hitting blocks with the right color