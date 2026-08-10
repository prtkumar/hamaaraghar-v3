const gate = document.getElementById("gate");

let opened = false;

function openGate(){

    if(opened) return;

    opened = true;

    document.body.classList.add("open");

    setTimeout(()=>{

        gate.style.pointerEvents="none";

    },2400);

}

gate.addEventListener("click",openGate);

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        openGate();

    }

});
