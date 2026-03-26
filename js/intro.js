const fakeload = document.querySelector(".fakeload");
const line = 3;
const column = 50;

const matriz = [];

for (let i = 0; i < line; i++) {
    matriz[i] = [];

    for (let j = 0; j < column; j++) {
        const span = document.createElement("span");
        span.classList.add("square");

        fakeload.appendChild(span);
        matriz[i][j] = span; // 🔥 guarda referência
    }
}


// SHORTS SOUNDS VARIABLES
const sons = [
    new Audio("assets/beep1.wav"),
    new Audio("assets/beep2.wav")
]


// Animação coluna por coluna
let curlColumn = 0;

function animar() {
    if (curlColumn >= 35) return; // 35 colunas acesas (80% aprox)

    // Acende a coluna atual
    for (let i = 0; i < line; i++) {
        matriz[i][curlColumn].style.opacity = "1";
    }


    // Random [som]
    const som = sons[Math.floor(Math.random() * sons.length)];
    som.currentTime = 0;
    som.volume = 0.2;
    som.play();

    curlColumn++;
    let delay;

    // 🔹 Fases de processamento
    if (curlColumn < 10) {
        delay = 100; // início rápido
    } else if (curlColumn < 25) {
        delay = 600; // meio travado
    } else {
        delay = 600; // final lento
    }

    // 🔹 Upgrade sinistro: pequenas pausas aleatórias para simular travamento
    if (curlColumn === 15) delay = 1500; // engasgo grande
    if (curlColumn === 22) delay = 1200; // outro engasgo menor

    // 🔹 Pequena aleatoriedade para deixar mais natural
    delay += Math.random() * 200;

    setTimeout(animar, delay);
}

// Start
animar();


// MESSAGE

/*
const text = `> Booting system...

> Checking identity...
> ERROR 404: IDENTITY NOT FOUND!

> Memory fragments detected.

> You are note supposed to be here.

...

> Or are you?

>Type "help" to continue.
`;


let i = 0;
const speed = 40;
const terminal = document.getElementById("terminal");


function typeEffect() {
    if(i < text.length) {
        terminal.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

typeEffect();
*/