import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function runScrollAnimation() {
  ScrollTrigger.create({
    trigger: "#scroll-box",
    scroller:"body",
    start: "top center",
    markers: true,
    once:true,
    onEnter: () => {
      gsap.from("#scroll-box", {
        y: 50,             
        opacity: 0,        
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.5,
      },);

    },
  });
}