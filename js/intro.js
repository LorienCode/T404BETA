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
