var active=3;

var mncircle = document.querySelectorAll(".mncircle");
gsap.to(mncircle[active-1],{
    opacity:1
})

var second = document.querySelectorAll(".stripe .second");
gsap.to(second[active-1],{
    opacity:1
})

mncircle.forEach(function(val,i){
    val.addEventListener("click",function(){
        gsap.to('#circle',{
            rotate:(3-(i+1))*10,
            ease: Expo.easeInOut,
            duration:1
        })
        greyOut();
        gsap.to(this,{
            opacity:1
        })
        gsap.to(second[i],{
            opacity:1
        })
    })
})

function greyOut(){
    gsap.to(mncircle,{
        opacity:0.5,
    })
    gsap.to(second,{
        opacity:0.5,
    })
}

gsap.to("#circle",{
    rotate:0,
    ease:Expo.easeInOut,
    duration:2
})
