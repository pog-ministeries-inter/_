const teaching = document.getElementById("teaching")
const prayer = document.getElementById("prayer")
const prophecy = document.getElementById("prophecy")
const mirracles = document.getElementById("mirracles")
const events = document.getElementById("events")

teaching.addEventListener("click", function() {
    window.location.href = "pog_teaching.html"
})

prayer.addEventListener("click", function() {
    window.location.href = "pog_prayer.html"
})

prophecy.addEventListener("click", function() {
    window.location.href = "pog_prophecy.html"
})

mirracles.addEventListener("click", function() {
    window.location.href = "pog_mirracles_and_healing.html"
})

events.addEventListener("click", function() {
    window.location.href = "pog_events.html"
})

function facebook() {
    window.open("https://m.facebook.com/benie.mike/", "_blank") 
}

function instagram() {
    window.open("https://www.instagram.com/powermck/", "_blank");
}

function tiktok() {
    window.open("https://vt.tiktok.com/ZS5Q3Yvym/", "_blank");
}

function youtube() {
    window.open("https://www.youtube.com/@Power.of.God.Ministries", "_blank")
}

function whatsapp() {
    window.open("https://whatsapp.com/channel/0029Va5mdPYBVJl3f1RHWU00", "_blank");
}

function x() {
    window.open("https://x.com/i/status/2008667937692086339", "_blank");
}

function linkedin() {
    window.open("https://za.linkedin.com/in/mk-tv-prophete-mike-power-82427b270", "_blank");
}

function telegram() {
    window.open("https://t.me/+PzVv19N7rHY1NGI0", "_blank");
}

function facebookTvChannel() {
    window.open(" https://www.messenger.com/channel/benie.mike", "_blank");
}

function snapchat() {
    window.open("https://www.snapchat.com/add/prophetemikepow?share_id=6uMHDQtWJmM&locale=en-ZA", "_blank");
}

// const listOfItem = [
//     "facebook-template",
//     "youtube-template",
//     "tiktok-template",
//     "whatsapp-template",
//     "instagram-template",
//     "x-template",
//     "linkedin-template"
// ];
// const dictionary = {
//     "facebook-template": "https://m.facebook.com/benie.mike/",
//     "youtube-template": "https://www.youtube.com/@Power.of.God.Ministries",
//     "tiktok-template": "https://vt.tiktok.com/ZS5Q3Yvym/",
//     "whatsapp-template": "https://whatsapp.com/channel/0029Va5mdPYBVJl3f1RHWU00",
//     "instagram-template": "https://www.instagram.com/powermck/",
//     "x-template": "https://x.com/i/status/2008667937692086339",
//     "linkedin-template": "https://za.linkedin.com/in/mk-tv-prophete-mike-power-82427b270"
// };

// function addEvents() {
//     listOfItem.forEach(id => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.addEventListener("click", () => {
//             window.open(dictionary[id], "_blank") 
//             });
//         }
//     });
// }

// addEvents()

// const listOfItem = [
//     "teaching", "prayer", "prophecy", "mirracles", "events"
// ];
// const dictionary = { 
//     "teaching": "pog_teaching.html", 
//     "prayer": "pog_prayer.html", 
//     "prophecy": "pog_prophecy.html",
//     "mirracles": "pog_mirracles_and_healing.html", 
//     "events": "pog_events.html",
// };


// listOfItem.forEach(id => {
//     const element = document.getElementById(id);
//     if (element) {
//         element.addEventListener("click", () => {
//             window.location.href = dictionary[id]
//         });
//     }
// });      

