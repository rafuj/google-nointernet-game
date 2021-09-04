let bird = document.querySelector('.game__box-bird')
let caktus = document.querySelector('.game__box-caktus')

function jump() {
    bird.classList.add('jump')
    setTimeout(function(){
        bird.classList.remove('jump')
    }, 500)
}

let score = document.querySelector('.game__box-score')
let millisecond = 0
let timer
function scoreRun() {
    timer = setInterval(function() {
        millisecond += 10
        let dateTimer = new Date(millisecond)
        score.innerHTML = ('0'+dateTimer.getUTCHours()).slice(-2)+':'+('0'+dateTimer.getUTCMinutes()).slice(-2)+':'+('0'+dateTimer.getUTCSeconds()).slice(-2)+':'+('0'+dateTimer.getUTCMilliseconds()).slice(-3, -1)
    }, 10)
}
scoreRun()
window.addEventListener('keypress', jump)

let deadLine = setInterval(function(){
    let birdsBottom = parseInt(window.getComputedStyle(bird).getPropertyValue('bottom'))
    let caktusLeft = parseInt(window.getComputedStyle(caktus).getPropertyValue('left'))
    for(var i = 0; i < 1000 ; i++) {
    }
    if(caktusLeft < 90 && caktusLeft > 70 && birdsBottom < 40) {
        alert('Your Game is Over Reload for try again')
        location.reload()
        clearInterval(timer)
    }
}, 10)