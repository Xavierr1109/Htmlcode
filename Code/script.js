const dialogue = [
    "hey yelenaphile zhang",
    "i hope ur happy",
    "How can i be happy if you are not happy ?",
    "And Jangan sering sering dorong ak menjauh ya :(",
    "Cause i can't handle being far from you",
    "Hehe",
    "itu yakin nama belakangnya gamau diganti jd nama belakangku :p",
    "because i really like you 💖"
];

let index = 0;
let typing = false;
let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        const music = document.getElementById("bgm");
        music.volume = 0.5;
        music.play();
        musicStarted = true;
    }
}

function typeText(text, element, speed = 40) {
    typing = true;
    element.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            typing = false;
            if (index === dialogue.length) {
                heartExplosion();
            }
        }
    }

    type();
}

function nextDialogue() {

    startMusic();

    if (typing) return;

    if (index < dialogue.length) {
        typeText(dialogue[index], document.getElementById("text"));
        index++;
    }
}

function heartExplosion() {
    const container = document.getElementById("hearts-container");

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";

        heart.style.left = "50%";
        heart.style.top = "50%";

        const x = (Math.random() - 0.5) * 800 + "px";
        const y = (Math.random() - 0.5) * 600 + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    }
}