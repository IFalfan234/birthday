const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*(window.innerWidth-200);

const y=Math.random()*(window.innerHeight-100);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});

document
.getElementById("yesBtn")
.addEventListener("click",()=>{

window.location.href="#ending";

});