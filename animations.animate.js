// let tl = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//         trigger: ".body",
//         opacity: 0,
//         pin: true, // pin the trigger element while active
//         start: "top top", // when the top of the trigger hits the top of the viewport
//         end: "+=500", // end after scrolling 500px beyond the start
//         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//         snap: {
//             snapTo: "labels", // snap to the closest label in the timeline
//             duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//             delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//             ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
//         }
//     }
// });
gsap.from(".first_anime_text", {
    scrollTrigger: {
        trigger: ".title_subline",
        start: "50% 50%",
        toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
});

gsap.from(".second_anime_text", {
    scrollTrigger: {
        trigger: ".title_subline",
        start: "top center",
        toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
    x: -50
});
gsap.from(".prices", {
    scrollTrigger: {
        trigger: ".first_anime_text",
        start: "bottom center",
        toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
    x: -50,
    scale: 0.7,
    scrub: 1
});

gsap.from(".third_anime_text", {
    scrollTrigger: {
        trigger: ".first_anime_text",
        start: "bottom center",
        toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
    x: -50,
    scale: 0,
    scrub: .5
});

gsap.from(".list_items", {
    scrollTrigger: {
        trigger: ".grid_2nd_template",
        start: "top top",
        toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1.5,
    x: -50,
    y: -50,
    scale: 0,
    scrub: .5,
    stagger: .2
});
gsap.from(".cans", {
    scrollTrigger: {
        trigger: ".grid_2nd_template",
        start: "top top",
        toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1,
    x: -50,
    y: -50,
    scale: 1.5,
    scrub: .5,
    stagger: .2
});