const tl = gsap.timeline();
tl.from('.line p', 2.8,{
    delay: 1,
    ease: 'power4.out',
    y: 250,
    skewY: 15,
    stagger: {
        amount: .8
    }
});
tl.to('.body',1.8,{
    backgroundColor: '#c9c9c9'
})
tl.to('.line p a', 1.5,{
    color: 'black'
},"-=1.8")
tl.from('.logo, .ul li',1.2,{
    opacity: 0,
    y: "-100%",
    stagger: {
        amount: .4
    }
});

follower = document.querySelectorAll('.cursor');

    posX = 0;
    posY = 0;
    mouseX = 0;
    mouseY = 0;

    TweenMax.to({},0.016,{
        repeat: -2,
        onRepeat: function(){
            posX += (mouseX  - posX) / 10;
            posY += (mouseY  - posY) / 10;

            TweenMax.set(follower, {
                css: {
                    left: posX - 80,
                    top: posY - 80
                }
            });
        }
    });

document.addEventListener("mousemove", 
    function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    });