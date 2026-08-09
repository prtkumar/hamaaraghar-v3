const gate = document.getElementById("gate");
const entrance = document.getElementById("entrance");
const world = document.getElementById("world");

let opened = false;

gate.addEventListener("click", () => {

    if (opened) return;
    opened = true;

    gate.classList.add("open");

    setTimeout(() => {
        entrance.style.opacity = "0";
    }, 1800);

    setTimeout(() => {
        entrance.style.display = "none";
        world.classList.add("show");
    }, 2400);

});
