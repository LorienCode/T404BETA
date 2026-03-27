/* FAKE LOA (GRID) */
/* *************** */


const fakeload = document.querySelector(".fakeload");
const line = 3;
const column = 50;

const matriz = [];

// BUILD GRID
for (let i = 0; i < line; i++) {
    matriz[i] = [];

    for (let j = 0; j < column; j++) {
        const span = document.createElement("span");
        span.classList.add("square");

        fakeload.appendChild(span);
        matriz[i][j] = span; // 🔥 guarda referência
    }
}



/* FAKE LOAD ANIMATION */
/* ******************* */

let curlColumn = 0;

function animar(callback) {
    if (curlColumn >= 40) {
        setTimeout(() => {
            fakeload.style.display = "none";

            if (callback) callback();
        }, 300);

        return;
    }

    // Acende a coluna atual
    for (let i = 0; i < line; i++) {
        matriz[i][curlColumn].style.opacity = "1";
    }

    curlColumn++;
    let delay;

    // 🔹 STEPS LOADs
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

    setTimeout(() => animar(callback), delay);
}



/* INTRO (SONG + TERMINAL) */
/* *********************** */

const text = `> Booting system...
> checking identity...
> ERROR 404: IDENTITY NOT FOUND!

> Memory fragments detected.
> You are not supposed to be here.

...

> or are you?

> Type "Help" to continue.
`;

let i = 0;
const speed = 40;
const terminal = document.getElementById("terminal");

function typeEffect() {
    if (i < text.length) {
        terminal.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

function iniciarIntro() {
    const audio = new Audio("error.mp3");

    audio.play().catch(() => {
        // fallback caso autoplay falhe
        typeEffect();
    });

    audio.onended = () => {
        typeEffect();
    };
}


/*     SYSTEM OF START     */
/* *********************** */

animar(() => { iniciarIntro(); })