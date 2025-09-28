console.log("JS working")
// DOM element
const board = document.querySelector(".board")
const holes = document.querySelectorAll(".hole")
const scoreDisplay = document.querySelector(".score")
const resetBtn = document.getElementById("resetBtn")
const mole = document.getElementById("mole")

//
let score = 0 // scores
let moleTimer //this timer for who controls the movement of the mall

const randomHole = () => {
  const emoji = Math.floor(Math.random() * holes.length)
  return holes[emoji]
}

//
const moveMole = () => {
  holes.forEach((hole) => hole.classList.remove("show")) //here to remove any from the holes show
  const hole = randomHole() //choose random hole and added mole
  hole.classList.add("show") // appear mole to chosen hole
  hole.appendChild(mole) //to trasfer the mole the photo or element
}

moleTimer = setInterval(() => moveMole(), 400) //make the mole moving per 0.4 second or summon the mole per 0.4s

mole.addEventListener("click", () => {
  if (score < 110) {
    // if was score less than 110
    score += 10 // increase score 10 each click
    scoreDisplay.innerText = score // change the text that is in variable
  }

  if (score >= 110) {
    // IF THE SCORES BECOME 110 OR MORE
    alert("🏆️🏆️🎉 YOU ARE WIN!! 🎉🏆️🏆️") // ALERT THE MESSAGE FOR WIN
    score = 0 // REPEAT SCORES TO 0
    scoreDisplay.innerText = score // update show scores
  }
})

resetBtn.addEventListener("click", () => {
  score = 0 // reset the score to 0
  scoreDisplay.innerText = score // update show scores
})

