const hero=document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*30;

const y=(e.clientY/window.innerHeight-.5)*30;

hero.style.backgroundPosition=

`${50+x}% ${50+y}%`;

});