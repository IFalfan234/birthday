const lenis = new Lenis({

    duration:1.6,

    smoothWheel:true,

    touchMultiplier:2,

    infinite:false

});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);