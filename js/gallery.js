const galleryCards=document.querySelectorAll(".memory-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.2
});

galleryCards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(120px)";

card.style.transition="1s";

observer.observe(card);

});