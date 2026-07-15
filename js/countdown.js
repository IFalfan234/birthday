const targetDate = new Date("2026-07-19T05:30:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        document.getElementById("countdown").innerHTML =
        "<h1>Happy Birthday My Love ❤️</h1>";

        return;
    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
    );

    const minutes=Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
    );

    const seconds=Math.floor(
        (distance%(1000*60))
        /1000
    );

    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);