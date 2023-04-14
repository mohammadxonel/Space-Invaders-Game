const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('.results')
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersId
let goingRight = true
let aliensRemove = []
let results = 0

for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const square = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,10,
    15,16,17,18,19,20,21,22,23,24,25,
    30,31,32,33,34,35,36,37,38,39,40,
  ]

  function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if(!aliensRemove.includes(i)) {
            square[alienInvaders[i]].classList.add('invader')
        }
    }
  }

  draw()

  function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        square[alienInvaders[i]].classList.remove('invader')
    }
  }

  square[currentShooterIndex].classList.add('shooter')

  
