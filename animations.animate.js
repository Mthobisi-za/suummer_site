gsap.from(".banner_holder", {
    scrollTrigger: {
        trigger: ".body",
        // start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
    y: -50
});
gsap.from(".title_holder", {
    scrollTrigger: {
        trigger: ".body",
        // start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
    y: 50
});
gsap.from(".first_anime_text", {
    scrollTrigger: {
        trigger: ".title_subline",
        start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1,
    y: 10
});

gsap.from(".second_anime_text", {
    scrollTrigger: {
        trigger: ".title_subline",
        start: "top center",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
    y: 10
});

// fade in
gsap.from(".prices", {
    scrollTrigger: {
        trigger: ".title_subline",
        start: "top center",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
    y: 10
});

gsap.from(".third_anime_text", {
    scrollTrigger: {
        trigger: ".first_group",
        start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1,
    y: 10
});

gsap.from(".fourth_anime_text", {
    scrollTrigger: {
        trigger: ".first_group",
        start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 2,
    y: 10
});

gsap.from(".first_group_list", {
    scrollTrigger: {
        trigger: ".container_second",
        start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0.5,
    duration: 1.5,
    y: 10
});
gsap.from(".second_group_list", {
    scrollTrigger: {
        trigger: ".container_second",
        start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0.5,
    duration: 1,
    y: 15
});
gsap.from(".third_group_list", {
    scrollTrigger: {
        trigger: ".container_second",
        start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0.5,
    duration: 0.5,
    y: 20
});
gsap.from(".extra_txt", {
    scrollTrigger: {
        trigger: ".container_second",
        start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1,
    y: 10
});
gsap.from(".fifth_anime_text", {
    scrollTrigger: {
        trigger: ".first_group_list",
        start: "50% 50%",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1,
    y: 10
});

gsap.from(".sixth_anime_text", {
    scrollTrigger: {
        trigger: ".cans",
        start: "bottom bottom",
        // toggleActions: "restart none none reverse"
    }, // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1,
    y: 10
});