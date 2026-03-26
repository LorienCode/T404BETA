// FAKE LOADED [!]
const fakeload = document.querySelector(".fakeload");
const line = 2;
const column = 50;

for (let i = 0; i < line; i++) {
    for (let j = 0; j < column; j++) {
        const span = document.createElement("span");
        span.classList.add("square");
        fakeload.appendChild(span)
    }
}



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