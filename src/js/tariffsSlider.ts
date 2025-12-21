import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade"
import {EffectFade, Navigation} from "swiper/modules";
import {SwiperOptions} from "swiper/types";

export default function tariffsSlider() {
    const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".js-tariffs-slider")
    );

    const mql = window.matchMedia("(max-width: 640px)");

    elements.forEach((element) => {
        const container = element.querySelector<HTMLElement>(".swiper");
        if (!container) return;

        const options: SwiperOptions = {
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
                    ".tariffs__arrow--prev, .cube-tariffs__slider-arrow--prev"
                ),
                nextEl: element.querySelector<HTMLButtonElement>(
                    ".tariffs__arrow--next, .cube-tariffs__slider-arrow--next"
                ),
            },
        };

        let instance: Swiper | null = null;

        const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                if (instance) instance.destroy();
                instance = new Swiper(container, options);
            } else {
                if (instance) instance.destroy();
                instance = null;
            }
        };

        mql.addEventListener("change", handleWidthChange);

        handleWidthChange(mql);
    });
}
