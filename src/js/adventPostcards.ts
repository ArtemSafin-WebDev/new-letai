import Swiper from "swiper";
import {Controller, EffectCards, EffectCreative, EffectFade, Navigation} from "swiper/modules";
import "swiper/css";


import "swiper/css/effect-creative";
import "swiper/css/effect-cards";
import gsap from "gsap";

export default function adventPostcards() {
    const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".js-advent-postcards")
    );
    elements.forEach((element) => {
        const cardsContainer = element.querySelector<HTMLElement>(
            ".advent-modal__postcards-slider .swiper"
        );
        if (!cardsContainer) return;
        let mm = gsap.matchMedia();
        const slides = Array.from(element.querySelectorAll<HTMLElement>(".swiper-slide"));
        const wrapper = element.querySelector<HTMLElement>(".swiper-wrapper");
        mm.add("(min-width: 641px)", () => {
            const clones = slides.map(slide => slide.cloneNode(true) as HTMLElement);
            wrapper?.append(...clones);
            const instance = new Swiper(cardsContainer, {
                speed: 600,
                // slidesPerView: "auto",
                effect: "creative",
                longSwipesRatio: 0.2,
                watchSlidesProgress: true,

                centeredSlides: true,
                slideToClickedSlide: true,
                loop: true,
                creativeEffect: {
                    limitProgress: 2,
                    shadowPerProgress: true,
                    next: {
                        translate: ["55%", "-8%", 0],
                        scale: 1,
                        shadow: false,
                        origin: "left center",

                    },
                    prev: {
                        translate: ["-55%", "-8%", 0],
                        scale: 1,
                        shadow: false,
                        origin: "right center",

                    },
                },
                modules: [EffectCreative, Controller, EffectCards],
            });
            instance.slideToLoop(1, 0);
            return () => {
                instance.destroy(true);
                clones.forEach((clone) => clone.remove())
            }
        });
        mm.add("(max-width: 640px)", () => {
            const instance = new Swiper(cardsContainer, {
                slidesPerView: 1,
                speed: 600,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                modules: [Navigation, EffectFade],
                spaceBetween: 60,
                navigation: {
                    prevEl: element.querySelector<HTMLButtonElement>(
                        ".advent-modal__postcards-slider-arrow--prev"
                    ),
                    nextEl: element.querySelector<HTMLButtonElement>(
                        ".advent-modal__postcards-slider-arrow--next"
                    ),
                },
            });
            return () => {
                instance.destroy(true)
            }
        });


    });
}