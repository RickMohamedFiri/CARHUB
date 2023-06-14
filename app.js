const blob = document.querySelector("#blob");
const blurr = document.querySelector("#blur");
blurr.onmousemove=e=>{
    const {clientX, clientY}=e;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
}, {duration: 50, fill: "forwards" });
}




gsap.from('.logo', 1.5, {
    x: innerWidth,
    ease: Expo.easeOut,
})

gsap.from('.links a', .8, {
    x:-900,
    opacity:0,
    stagger: .05,
    ease: Expo.easeOut,
    delay: .8
})


gsap.from('.intro h3', 1.1, {
    delay: 1.5,
    x:innerWidth,
    ease: 'bounce'
})

gsap.from('.intro h1 span p', .6, {
    delay: 2.5,
    y: 120,
    stagger:.04,
    opacity: 0,
    ease: "back.out(7)"
})
gsap.from('.intro h2', .6, {
    delay: 3.7,
    y: -40,
    opacity: 0,
    ease: 'ease.out'
})
gsap.from('.pd', 1.1, {
    delay: 4.2,
    y: -20,
    opacity: 0
})


gsap.from('.about-content h1', 1, {
    y:-50,
    opacity:0,
    delay:1.7,
    ease: 'bounce'
})


gsap.from('.p', 1, {
    y:50,
    opacity:0,
    delay:1.7,
    ease: 'bounce'
})


gsap.from('#card', 1, {
    y:innerHeight,
    opacity:0,
    delay:2.5
})

gsap.from('.card2', 1, {
    y:innerHeight*-1,
    opacity:0,
    delay:3,
    ease:'bounce'
})

gsap.from('.card-content h2',.8,{
    y:50,
    opacity:0,
    delay:4,
    ease:'ease'
})


gsap.from('.card-content p',.8,{
    x:40,
    opacity:0,
    delay:4.5,
    ease:'ease'
})


gsap.from('.projects-content h1', 1, {
    scale:0,
    opacity:0,
    delay:1.5,
    ease: 'bounce'
})

gsap.from('.projects-content p', 1, {
    y:-40,
    opacity:0,
    delay:2,
    ease: 'bounce'
})


gsap.from('.gallery div', .6, {
    y:innerHeight*3,
    opacity:0,
    delay:2.5,
    stagger:.08,
    ease: "back.out(3.7)"
})



gsap.from('.contact-text h1', .8, {
    delay: 2,
    y:80,
    opacity:0,
    ease: 'ease'
})

gsap.from('.contact-text h2', .8, {
    delay: 2.8,
    x:innerWidth * -1,
    opacity:0,
    stagger:.3,
    ease: 'ease'
})

gsap.from('.contact-text h3', .8, {
    delay: 3.1,
    x:innerWidth * -1,
    stagger:.3,
    ease: 'ease'
})

gsap.from('.contact-text .tg', .8, {
    delay: 4.2,
    opacity:0,
    y:80,
    ease: 'ease'
})

gsap.from('.contact-area h1', .9, {
    delay: 4.9,
    opacity:0,
    scale:5,
    ease: 'elastic'
})

gsap.from('#input', .6, {
    delay: 5.7,
    x:innerWidth,
    opacity:0,
    ease: "back.out(1.7)",
    opacity:0,
    stagger:.09
})





