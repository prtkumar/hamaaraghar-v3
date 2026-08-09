const gate = document.getElementById("gate");

let opened = false;

gate.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    document.body.classList.add("open");

    setTimeout(() => {

        gate.style.pointerEvents = "none";

    }, 2400);

    setTimeout(() => {

        gate.style.opacity = "0";

    }, 3200);

    setTimeout(() => {

        gate.style.display = "none";

    }, 4200);

});
