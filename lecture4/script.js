var main=document.querySelector('#main')
var cursor=document.querySelector('#cursor')
var imageDiv=document.querySelector('#image')

main.addEventListener('mousemove',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

imageDiv.addEventListener('mouseenter',function(dets){
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff7c" 
    })
})

imageDiv.addEventListener('mouseleave',function(dets){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white" 
    })
})


