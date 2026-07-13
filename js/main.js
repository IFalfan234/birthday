const message = "Thank you for being part of my life ❤️";

let i = 0;

function typing() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}

typing();

const startBtn = document.getElementById("startBtn");
if (startBtn) {
    startBtn.addEventListener("click", () => {
        document.getElementById("letter").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const nextBtn = document.querySelector(".next-btn");
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        document.getElementById("timeline").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const music = document.getElementById("bgm");
const musicButton = document.getElementById("musicButton");
const cursor = document.querySelector(".cursor");

if (cursor) {
    window.addEventListener("mousemove", (event) => {
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
    });
}

if (musicButton && music) {
    musicButton.addEventListener("click", async () => {
        if (music.paused) {
            try {
                await music.play();
                musicButton.textContent = "🔇";
            } catch (error) {
                console.warn("Audio autoplay blocked:", error);
            }
        } else {
            music.pause();
            musicButton.textContent = "🎵";
        }
    });
}