let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s') //pega ponteiro dos segundos
let mElement = document.querySelector('.p_m') //pega ponteiro dos minutos
let hElement = document.querySelector('.p_h') //pega ponteiro da hora

function updateClock() {//analogico
    let now = new Date();
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    digitalElement.innerHTML = fixZero(hour) + ':' + fixZero(minute) + ':' + fixZero(second);
    
    let sDeg = ((360/60) * second) - 90//ponteiro na posicão horizontal, logo para se posicionar no 0 é necessario subtatrir 90º 
    let mDeg = ((360/60) * minute) - 90// 
    let hDeg = ((360/12) * hour) - 90//
    
    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`

}

function fixZero(time){//adiciona 0 ao nº<10
    return time<10? `0${time}`: time;
}
setInterval(updateClock, 1000)
updateClock()
