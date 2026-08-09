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
