const gate = document.getElementById("gate");

const world = document.getElementById("world");

let opened = false;

gate.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    gate.classList.add("open");

    setTimeout(() => {

        gate.style.pointerEvents = "none";

    },2400);

    setTimeout(() => {

        gate.style.opacity = "0";

    },3200);

    setTimeout(() => {

        gate.style.display = "none";

    },4200);

});
