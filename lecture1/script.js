var tl=gsap.timeline()

tl.from('h2',{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from('h4',{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from('h1',{
    y:20,
    opacity:0,
    duration:1,
})

// gsap.to('#box1',{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate: 360,
//     // repeat:-1,
//     // yoyo:true
// })

// gsap.to('#box2',{
//     x:1200,
//     backgroundColor:"Yellow",
//     duration:2,
//     delay:3,
// })

// gsap.to('#box3',{
//     x:1200,
//     scale:0.5,
//     duration:2,
//     delay:5,
//     borderRadius:"50%"
// })

// gsap.from('h1',{
//     // color:"red",
//     y:30,
//     opacity:0,
//     duration:2,
//     delay:2,
//     stagger:1
// })