console.log("Asslamualikum Kia hal hai Yara");


gsap.registerPlugin(ScrollTrigger);


gsap.to(".FullPage_Animation h1", {
  transform: "translateX(-66%)",
  scrollTrigger:{
    trigger:".FullPage_Animation",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -500%",
    scrub:2,
    pin:true
  },
});
