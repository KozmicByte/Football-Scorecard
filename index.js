document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-goal");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!button.disabled) {  // Prevents adding goals when disabled
                let scoreElement = button.previousElementSibling.querySelector("h1");
                let currentScore = parseInt(scoreElement.textContent);
                scoreElement.textContent = currentScore + 1;
            }
        });
    });
});

let hteam = document.getElementById('home-team');
let hlogo = document.getElementById('home-logo');
let ateam = document.getElementById('away-team');
let alogo = document.getElementById('away-logo');
let score = document.getElementsByTagName('h1');
let time = document.getElementById('time');
let interval;
let count = 0;
const buttons = document.querySelectorAll(".btn-goal");  // Select buttons globally

function toBarca() {
    hteam.textContent = "Barcelona";
    hlogo.src = 'assets/barcalogo.jpg';
    reset();
}
function toMan() {
    hteam.textContent = "Manchester United";
    hlogo.src = 'assets/manunited.jpg';
    reset();
}
function toBay() {
    hteam.textContent = "Bayern Munich";
    hlogo.src = 'assets/bayern.jpg';
    reset();
}
function toMilan() {
    hteam.textContent = "AC Milan";
    hlogo.src = 'assets/milan.jpg';
    reset();
}
function toReal() {
    hteam.textContent = "Real Madrid";
    hlogo.src = 'assets/reallogo.jpg';
    reset();
}
function toBarcaA() {
    ateam.textContent = "Barcelona";
    alogo.src = 'assets/barcalogo.jpg';
    reset();
}
function toManA() {
    ateam.textContent = "Manchester United";
    alogo.src = 'assets/manunited.jpg';
    reset();
}
function toBayA() {
    ateam.textContent = "Bayern Munich";
    alogo.src = 'assets/bayern.jpg';
    reset();
}
function toMilanA() {
    ateam.textContent = "AC Milan";
    alogo.src = 'assets/milan.jpg';
    reset();
}
function toRealA() {
    ateam.textContent = "Real Madrid";
    alogo.src = 'assets/reallogo.jpg';
    reset();
}

function reset() {
    for (let i = 0; i < score.length; i++) {
        score[i].textContent = "0";
    }
    time.textContent = '0';
    enableButtons(); 
}

function timer() {
    if (count < 5) {
        count++;
        time.textContent = count;
    } else {
        clearInterval(interval);
        disableButtons();  
        window.alert('Match is over');
    }
}

function start() {
    clearInterval(interval);
    count = 0;
    time.textContent = count;
    enableButtons();
    interval = setInterval(timer, 1000);
}


function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}
function enableButtons() {
    buttons.forEach(button => button.disabled = false);
}
