const progress=document.querySelector(".progress-bar");
const text=document.getElementById("loading-text");
const loading=document.getElementById("loading-screen");

let percent=0;

const timer=setInterval(()=>{

percent++;

progress.style.width=percent+"%";

text.innerHTML=percent+"%";

if(percent>=100){

clearInterval(timer);

loading.style.opacity="0";

loading.style.transition="1.5s";

setTimeout(()=>{

loading.remove();

},1500);

}

},35);