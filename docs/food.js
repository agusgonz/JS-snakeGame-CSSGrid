import { onSnake ,expandSnake } from "./snake.js"
import {randomGridPosition} from "./grid.js"
let food = getRandomFoodPosition()
const EXPANSION_RATE = 2
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}
export function draw(gameBoard) {
    const footElement = document.createElement("div")
    footElement.style.gridRowStart = food.y
    footElement.style.gridColumnStart = food.x
    footElement.classList.add("food")
    gameBoard.appendChild(footElement)
}
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}