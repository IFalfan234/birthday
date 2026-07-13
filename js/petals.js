const container=document.getElementById("petals-container");

const flowers=[

"images/flowers/rose.png",

"images/flowers/lily.png"

];

function createFlower(){

const img=document.createElement("img");

img.src=flowers[Math.floor(Math.random()*flowers.length)];

img.className="petal";

img.style.left=Math.random()*100+"vw";

img.style.animationDuration=(8+Math.random()*8)+"s";

img.style.width=(20+Math.random()*35)+"px";

container.appendChild(img);

setTimeout(()=>{

img.remove();

},17000);

}

setInterval(createFlower,300);