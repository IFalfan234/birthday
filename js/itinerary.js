const itineraryCards=document.querySelectorAll(".itinerary-card");

const itineraryObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

itineraryCards.forEach(card=>{

itineraryObserver.observe(card);

});