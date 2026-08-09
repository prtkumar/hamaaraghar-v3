const App = {

    start() {

        console.log("🏡 Hamaara Ghar V3");

        this.ready();

    },

    ready() {

        document.body.classList.add("ready");

    }

};

document.addEventListener(
    "DOMContentLoaded",
    () => App.start()
);

const enterBtn = document.getElementById("enterBtn");

if(enterBtn){

enterBtn.onclick=()=>{

window.location.href="beej.html";

};

}

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});
