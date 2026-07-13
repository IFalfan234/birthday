const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

const particles=[];

for(let i=0;i<250;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*6+3,

dx:(Math.random()-0.5)*3,

dy:Math.random()*3+2

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},80%,70%)`;

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

if(p.y>canvas.height)p.y=0;

});

requestAnimationFrame(animate);

}

animate();