const btn=document.getElementById("openBook");

btn.onclick=()=>{

document.querySelector(".book").style.transform=
"rotateY(-180deg) scale(1.15)";

setTimeout(()=>{

document

.querySelector(".hero")

.scrollIntoView({

behavior:"smooth"

});

},1200);

};