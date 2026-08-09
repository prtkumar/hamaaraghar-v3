const gate = document.getElementById("gate");
const world = document.getElementById("world");

gate.addEventListener("click", () => {

    gate.classList.add("open");

    setTimeout(() => {
        gate.style.display = "none";
    }, 2200);

    setTimeout(() => {
        world.style.opacity = "1";
        world.classList.add("show");
    }, 500);

});
