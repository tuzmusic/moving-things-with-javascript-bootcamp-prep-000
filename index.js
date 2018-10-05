var dodger = document.getElementById('dodger')
var gameDiv = document.getElementById('game')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left <= 0) { return }
  dodger.style.left = `${left - 10}px`
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  // if (right <= 0) { return }
  dodger.style.left = `${left + 10}px`
}

document.addEventListener('keydown', function(key) {
  console.log(key.which);
  if (key.which === 37) {
    moveDodgerLeft()
  } else if (key.which === 39) {
    moveDodgerRight()
  }
})
// document.addEventListener('keydown', (key) => {
//   console.log("key!");
//   if (key.which === 37) {
//     moveDodgerLeft()
//   } else if (key.which === 39) {
//     moveDodgerRight()
//   }
// })
