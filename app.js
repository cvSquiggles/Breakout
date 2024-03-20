const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 1100
const boardHeight = 700
var gameStarted = false
let xDirection = 0.1
let yDirection = -0.1

let timerID
let score = 0

const userStart = [49, 1]
let currentPosition = userStart

const ballStart = [53, 6]
let ballCurrentPosition = ballStart

const colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

//blocks
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
    //row one
    new Block (1.5, 95),
    new Block (11.5, 95),
    new Block (21.5, 95),
    new Block (31.5, 95),
    new Block (41.5, 95),
    new Block (51.5, 95),
    new Block (61.5, 95),
    new Block (71.5, 95),
    new Block (81, 95),
    new Block (90.5, 95),
    //row two
    new Block (1.5, 90),
    new Block (11.5, 90),
    new Block (21.5, 90),
    new Block (31.5, 90),
    new Block (41.5, 90),
    new Block (51.5, 90),
    new Block (61.5, 90),
    new Block (71.5, 90),
    new Block (81, 90),
    new Block (90.5, 90),
    //row three
    new Block (1.5, 85),
    new Block (11.5, 85),
    new Block (21.5, 85),
    new Block (31.5, 85),
    new Block (41.5, 85),
    new Block (51.5, 85),
    new Block (61.5, 85),
    new Block (71.5, 85),
    new Block (81, 85),
    new Block (90.5, 85),
    //row four
    new Block (1.5, 80),
    new Block (11.5, 80),
    new Block (21.5, 80),
    new Block (31.5, 80),
    new Block (41.5, 80),
    new Block (51.5, 80),
    new Block (61.5, 80),
    new Block (71.5, 80),
    new Block (81, 80),
    new Block (90.5, 80),
    //row five
    new Block (1.5, 75),
    new Block (11.5, 75),
    new Block (21.5, 75),
    new Block (31.5, 75),
    new Block (41.5, 75),
    new Block (51.5, 75),
    new Block (61.5, 75),
    new Block (71.5, 75),
    new Block (81, 75),
    new Block (90.5, 75),
    //row six
    new Block (1.5, 70),
    new Block (11.5, 70),
    new Block (21.5, 70),
    new Block (31.5, 70),
    new Block (41.5, 70),
    new Block (51.5, 70),
    new Block (61.5, 70),
    new Block (71.5, 70),
    new Block (81, 70),
    new Block (90.5, 70),
    //row seven
    new Block (1.5, 65),
    new Block (11.5, 65),
    new Block (21.5, 65),
    new Block (31.5, 65),
    new Block (41.5, 65),
    new Block (51.5, 65),
    new Block (61.5, 65),
    new Block (71.5, 65),
    new Block (81, 65),
    new Block (90.5, 65),
]

//Listen for player input
document.addEventListener('keydown', moveUser)

//add blocks
drawBlocks()

//add user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
//render user
drawUser()

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
//render ball
drawBall()

//render a block at it's set location with a randomized color
function drawBlocks(){
    for(let i =0; i < blocks.length; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + '%'
        block.style.bottom = blocks[i].bottomLeft[1] + '%'
        //scoreDisplay.textContent = colorOptions[Math.round((Math.random() * 5))] ~Debug line for troubleshooting
        blocks[i].color = colorOptions[Math.round((Math.random() * 5))]
        block.style.backgroundColor = blocks[i].color
        grid.appendChild(block)
    }
}


//render user at location specified by the currentPosition array
function drawUser() {
    user.style.left = currentPosition[0] + '%'
    user.style.bottom = currentPosition[1] + '%'
}

//render ball at location specified by the ballCurrentPosition array
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + '%'
    ball.style.bottom = ballCurrentPosition[1] + '%'
}

//enable movement
function moveUser(e) {
    console.log(e.key)
    if (gameStarted == false) {
        if(e.key == 'Control'){
            gameStarted = true
        }
        return
    } else{
    switch(e.key){
        case 'ArrowLeft':
            if (currentPosition[0] > 0){
                currentPosition[0] -= 1
                drawUser()
            }
            break
        case 'ArrowRight':
            if (currentPosition[0] < 91){
                currentPosition[0] += 1
                drawUser()
            }
            break
        }
    }
}

//move ball
function moveBall() {
    if (gameStarted == true) {
    if (ballCurrentPosition[0] <= 0 || ballCurrentPosition[0] >= 99) {
        xDirection = xDirection * -1
    }
    if (ballCurrentPosition[1] <= 0 || ballCurrentPosition[1] >= 99) {
        yDirection = yDirection * -1
    }
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    }
}
timerID = setInterval(moveBall, 10)


//Notes: Add pause on block hit for movement to give user time to input another color if needed; combo for hitting blocks with the right color