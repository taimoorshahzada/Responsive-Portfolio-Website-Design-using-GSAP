const tlp = gsap.timeline();
tlp.to('.body2', .5,{
    backgroundColor: '#161616',
    color: '#c9c9c9'
})
tlp.from('.big-txt', 1.8,{
    delay: 1,
    y: "-100%",
    opacity: 0
});
tlp.from(".big-img, .big-desc",1.5,{
    opacity: 0,
    stagger: {
        amount: .5
    }
},"-=.6")