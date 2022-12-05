console.log("yep")
let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')

setInterval(() => {
    const now = new Date()
    hourDig = now.getHours()
    minDig = now.getMinutes()
    secDig = now.getSeconds()

    if(hourDig < 10) {
        hourDig = '0' + hourDig
    } else if (minDig < 10) {
        minDig = '0' + minDig
    } else if (secDig < 10) {
        secDig = '0' + secDig
    }

    hour.innerHTML = hourDig
    minute.innerHTML = minDig
    second.innerHTML = secDig

}, 1000)