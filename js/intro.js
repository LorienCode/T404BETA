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

let curlColumn = 0;

const interval = setInterval(() => {
    if (curlColumn >= 35) { 
        // 35 colunas acesas (70% de 50 ≈ 30% apagadas)
        clearInterval(interval);
        return;
    }

    for (let i = 0; i < line; i++) {
        matriz[i][curlColumn].style.opacity = "1";
    }

    curlColumn++;
}, 100);


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