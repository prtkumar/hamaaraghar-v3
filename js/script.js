const gate = document.getElementById("gate");
const gateImage = document.getElementById("gateImage");
const scene = document.getElementById("scene");
const welcome = document.getElementById("welcome");

let entered = false;

gate.addEventListener("click", () => {

    if (entered) return;

    entered = true;

    gate.style.pointerEvents = "none";

    /* हल्का प्रकाश */

    document.body.classList.add("open");

    /* द्वार धीरे-धीरे विलीन */

    gateImage.animate(
        [
            {
                opacity:1,
                transform:"scale(1)"
            },
            {
                opacity:0,
                transform:"scale(.94)"
            }
        ],
        {
            duration:2200,
            easing:"ease-in-out",
            fill:"forwards"
        }
    );

    /* संसार भीतर आए */

    scene.animate(
        [
            {
                transform:"scale(1.08)"
            },
            {
                transform:"scale(1)"
            }
        ],
        {
            duration:5200,
            easing:"ease-out",
            fill:"forwards"
        }
    );

    setTimeout(()=>{

        welcome.style.opacity="1";

    },1800);

});
