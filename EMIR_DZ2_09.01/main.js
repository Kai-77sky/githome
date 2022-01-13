const container = document.getElementById('container')
const addElem = () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'element')
    div.innerText = 'Element'
    container.appendChild(div)
}

// task 2

const container2 = document.getElementById('container2')
const addElem2 = () => {
    const div2 = document.createElement('div')
    div2.setAttribute('class', 'element')
    div2.innerHTML = Math.floor(Math.random() * 20)
    container2.appendChild(div2)
}
addElem2();
let interval = setInterval(addElem2, 5000)
const startInterval = () => {
    interval = setInterval(addElem2, 5000)
}
const stopInterval = () => {
    clearInterval(interval)
}
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const go = document.getElementById('start2')
const stop = document.getElementById('pause')
const reset = document.getElementById('reset')

const timer = () => {
    seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, '0')
    if (+ seconds.textContent === 60){
        minutes.textContent = (+minutes.textContent + 1).toString().padStart(2, '0')
        seconds.textContent = '00'
    }
}

const intervalStart = () => {
    timerInterval = setInterval(timer, 1000)
    go.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
}
const intervalStop = () => {
    clearInterval(timerInterval)
    go.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
}
const intervalReset = () => {
    clearInterval(timerInterval)
    minutes.textContent = '00'
    seconds.textContent = '00'
    go.disabled = false;
    stop.disabled = false;
    reset.disabled = true;
}


// task 4

const user = document.forms[0]
const login = user.lastElementChild

const check = () => {
    if (user.username.value.length < 6 || user.password.value.length < 6){
        login.disabled = true;
    }
    else {
        login.disabled = false;
    }
}
const log = (e) => {
    e.preventDefault();
    alert(`Username: ${user.username.value} \n Password: ${user.password.value}`)
}

user.addEventListener('change', check)
user.addEventListener('click', log)