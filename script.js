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

gsap.to(".cssplugintext", {
    duration: 1, 
    opacity: .5,
    repeat: -1,
    yoyo: true
});

gsap.to('.transformblock', {
    duration: 1,
    rotationX: 360,
    rotationY: 180,
    borderRadius: 50,
    backgroundColor: '#32a852', 
});