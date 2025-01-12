import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateElements = () => {
    const anime: HTMLElement[] = gsap.utils.toArray('.animatable') as HTMLElement[];

    anime.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -30,
                visibility: 'hidden', 
            },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "ease-in-out",
                visibility: 'visible', 
                scrollTrigger: {
                    trigger: element, 
                    start: 'top 80%',  
                    end: 'top 30%',    
                    toggleActions: 'play none none reverse', 
                    once: true
                },
            }
        );
    });
};


export const animateReverse = () => {
    const anime: HTMLElement[] = gsap.utils.toArray('.animatableReverse') as HTMLElement[];

    anime.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -30,
                visibility: 'hidden', 
            },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "ease-in-out",
                visibility: 'visible', 
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%', 
                    end: 'top 30%',    
                    toggleActions: 'play none none reverse',  
                    once: true
                },
            }
        );
    });
};
