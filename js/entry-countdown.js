const entryTargetDate = new Date("2026-07-19T05:30:00").getTime();
const redirectUrl = "home.html";

const entryTimer = {
    days: document.getElementById("entry-days"),
    hours: document.getElementById("entry-hours"),
    minutes: document.getElementById("entry-minutes"),
    seconds: document.getElementById("entry-seconds")
};

function updateEntryCountdown() {
    const now = new Date().getTime();
    const distance = entryTargetDate - now;

    if (distance <= 0) {
        window.location.href = redirectUrl;
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    entryTimer.days.textContent = String(days).padStart(2, "0");
    entryTimer.hours.textContent = String(hours).padStart(2, "0");
    entryTimer.minutes.textContent = String(minutes).padStart(2, "0");
    entryTimer.seconds.textContent = String(seconds).padStart(2, "0");
}

updateEntryCountdown();
setInterval(updateEntryCountdown, 1000);
