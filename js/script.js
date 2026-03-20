// GSAP INIT
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.to(".hero-title", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.to(".hero-subtitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5
});

gsap.from(".primary-btn", {
    opacity: 0,
    y: 20,
    delay: 1,
    duration: 0.8
});

// FEATURES SCROLL
gsap.from(".feature-card", {
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%"
    },
    opacity: 0,
    y: 60,
    stagger: 0.3,
    duration: 1
});

// TEAM SCROLL
gsap.from(".team-card", {
    scrollTrigger: {
        trigger: ".team",
        start: "top 80%"
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 1
});

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("🔥 Message sent successfully!");
});