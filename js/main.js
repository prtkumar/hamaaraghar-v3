/* ===========================
   HAMAARA GHAR V6
=========================== */

const gate = document.getElementById("gate");
const hero = document.getElementById("hero");

let opened = false;

function enterHome(){

    if(opened) return;

    opened = true;

    document.body.classList.add("open");

    /* 2.5 सेकण्ड बाद Gate हटे */

    setTimeout(()=>{

        gate.style.display="none";

    },2500);

}

gate.addEventListener("click",enterHome);

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        enterHome();

    }

});
