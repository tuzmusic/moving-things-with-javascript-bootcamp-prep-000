var dodger = $('#dodger')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  dodger.style.left = `${left - 10}px`
}

function moveDodgerRight() {

}

document.addEventListener('keydown', (key) => {
  console.log("key!");
  if (key.which === 37) {
    moveDodgerLeft)()
  } else if (key.which === 39) {
    moveDodgerRight()
  })
}
