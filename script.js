/** Basic tweening */

gsap.to(".tweenblock", {
    duration: 1,
    x: 100, 
    y: 100, 
    rotation: 180,
    backgroundColor: '#32a852', 
    borderRadius: 50});

gsap.to(".tweenblock2", {
    duration: 1, 
    delay: 1,
    x: 100, 
    y: 100, 
    rotation: 180,
    backgroundColor: '#3269a8', 
    borderRadius: '50% 5%'});

/** CSS plugin */

gsap.to(".cssplugintext", {
    duration: 1, 
    opacity: .5,
    repeat: -1,
    yoyo: true,
    letterSpacing: '1px'
});

/** 2d 3d transform*/

gsap.to('.transformblock', {
    duration: 1,
    rotationX: 360,
    rotationY: 180,
    borderRadius: 50,
    backgroundColor: '#32a852', 
});

gsap.to('.transformblock2', {
    duration: 1,
    skewX: 30,
    skewY: 30,
    rotationY: 180,
});
gsap.from('.transformblock3', {
    duration: 1,
    scaleX: 2,
    scaleY: 3,
    rotationY: 180,
    x: 100,
    background: '#ff0ad6'
});

/** Easing */

gsap.to('.easeblock',{
    duration: 2,
    y: -250
});
gsap.to('.easeblock1',{
    duration: 2,
    y: -250,
    ease: "power4.out"
});
gsap.to('.easeblock2',{
    duration: 2,
    y: -250,
    ease: "back.out"
});
gsap.to('.easeblock3',{
    duration: 2,
    y: -250,
    ease: "elastic.out"
});
gsap.to('.easeblock4',{
    duration: 2,
    y: -250,
    ease: "steps(12)"
});