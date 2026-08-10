/* =====================================
   HAMAARA GHAR V7
===================================== */

const body = document.body;

const gate = document.getElementById("gate");

const intro = document.getElementById("intro");

const welcome = document.getElementById("welcome");

const home = document.getElementById("home");

let entered = false;

/* -------------------------------------
   ENTER
------------------------------------- */

function enterHome(){

    if(entered) return;

    entered = true;

    body.classList.add("open");

    /* 3 सेकण्ड बाद Welcome हटे */

    setTimeout(()=>{

        welcome.style.opacity="0";

    },5200);

    /* Home दिखाई दे */

    setTimeout(()=>{

        body.classList.add("ready");

    },6200);

    /* Intro हटे */

    setTimeout(()=>{

        intro.style.display="none";

    },7000);

}

/* -------------------------------------
   CLICK
------------------------------------- */

gate.addEventListener("click",enterHome);

/* -------------------------------------
   SPACE KEY
------------------------------------- */

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        enterHome();

    }

});
