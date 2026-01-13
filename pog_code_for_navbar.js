const menuBtn = document.querySelector(".menu-btn");
const menuDisplay = document.querySelector(".menu-display");
const listOfItem = [
    "about", "home", "address", "contact-us", "teachings-navbar",
    "prayers-navbar", "prophecies-navbar", "mirracles-navbar",
    "events-navbar"
];
const dictionary = {
    "about": "pog_vision.html", "home": "_.html", 
    "address": "pog_addresses.html", "teachings-navbar": "pog_teaching.html",
    "prayers-navbar": "pog_prayer.html", "prophecies-navbar": "pog_prophecy.html",
    "mirracles-navbar": "pog_mirracles_and_healing.html", "events-navbar": "pog_events.html",
    "contact-us": "contact_us.html"
};
let menuOpen = false;

menuBtn.addEventListener("click", ()=> {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        menuDisplay.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuDisplay.classList.remove("open");
        menuOpen = false;
    }
});

function addEvents() {
    listOfItem.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener("click", () => {
            window.location.href = dictionary[id]
            });
        }
    });
}


addEvents()            
