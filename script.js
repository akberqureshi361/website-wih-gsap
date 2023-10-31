$(document).ready(function(){
    var $scramble = $(".scramble");
    $scramble.scramble(3000,20,"alphabet",true);
});

var tl = gsap.timeline();
tl.to(".Loading",{
    opacity:0,
    delay:2.5,
})
.to(".loader",{
    opacity:0,
    duration:1,
    ease:"Expo.easeInOut",
})
.to(
    ".loader",
    {
      y: "-100%",
     
      duration: 1,
      
    },
    "up"
  )
  .to(".svgwaala",{
    opacity: 1,
    delay:-1.7,
    ease: "Expo.easeInOut",
  },"donut"
  )
  .to("#dotted",{
    opacity: 1,
    delay:-1.8,
    ease: "Expo.easeInOut",
  },"donut")

  .to("#donut",{
    opacity: 1,
    scale:"2",
    delay:"-1.4",
    ease: "Expo.easeInOut",
    rotationY:"+=15",
    rotationX:"+=15",
    rotationZ: "+=15",
    duration:3,

  },"up")

  .from(
    "#kothik-k, #kothik-k2, #kothik-o, #kothik-t, #kothik-h, #kothik-i",{
        opacity:0,
        duration:1,
        scale:0,
        top:" 40%",
        left: "47%",
    },
    "up"
  );

  var tl2 = gsap.timeline();

  document.querySelectorAll("#explore").forEach(function(elem){
    elem.addEventListener("click", function(){
        tl2.to("#kothik-k",{
            left: "-15%",
            top:"-15%",
            scale:"2",
            rotate:"25deg",
            ease:"ease.out",
            duration:1,
            opacity:0,
        },"sw")

        .to("#kothik-t",{
            left: "115%",
            top:"-20%",
            scale:"2",
            rotate:"25deg",
            ease:"ease.out",
            duration:1,
            opacity:0,
        },"sw")

        .to("#kothik-h",{
            left: "115%",
            top:"110%",
            scale:"2",
            rotate:"25deg",
            ease:"ease.out",
            duration:1,
            opacity:0,
        },"sw")

        .to("#kothik-i",{
            left: "35%",
            top:"120%",
            scale:"2",
            rotate:"25deg",
            ease:"ease.out",
            duration:1,
            opacity:0,
        },"sw")

        .to("#kothik-k2",{
            left: "-15%",
            top:"80%",
            scale:"2",
            rotate:"25deg",
            ease:"ease.out",
            duration:1,
            opacity:0,
        },"sw")

        .to("#donut",{
            left: "80vw",
            top:"-10%",
            scale:"2",
            rotate:" 360 deg",
            ease:"ease.out",
            duration:1,
            opacity:0,
            delay:"-1",
        })

        .to("#dotted",{
            opacity:0,
        },"sw")

        .to(".svgwaala",{
            opacity:0,
        });
    });
  });

  function example() {
      window.location.href = "again.html";
  }