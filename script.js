console.log("yep")
let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')

setInterval(() => {
    const now = new Date()
    hourDig = now.getHours()
    minDig = now.getMinutes()
    secDig = now.getSeconds()

    hour.innerHTML = hourDig
    minute.innerHTML = minDig
    second.innerHTML = secDig

}, 1000)