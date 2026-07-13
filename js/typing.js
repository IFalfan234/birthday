const letter = `

Happy Birthday, Sayang ❤️

Hari ini adalah hari yang sangat spesial.

Aku bersyukur karena Tuhan mempertemukan aku dengan seseorang sebaik, sehangat, dan seindah dirimu.

Terima kasih sudah selalu ada, mendengarkan ceritaku, menemani setiap hariku, dan membuat hidupku jauh lebih berwarna.

Semoga semua impianmu tercapai, kesehatanmu selalu terjaga, dan kebahagiaan selalu menyertaimu.

Aku berharap kita akan terus menciptakan lebih banyak kenangan indah bersama.

Selamat ulang tahun.

I Love You Forever ❤️

`;

let i = 0;

function typeLetter(){

    if(i < letter.length){

        document.getElementById("typing-text").innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeLetter,35);

    }

}

window.addEventListener("load",typeLetter);