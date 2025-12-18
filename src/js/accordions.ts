export default function accordions() {
    const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".js-accordion")
    );
    elements.forEach((element) => {
        const button = element.querySelector<HTMLButtonElement>("button");

        button?.addEventListener("click", (event) => {
            event.preventDefault();
            elements.forEach((someElement) => {
                if (someElement === element) return;
                someElement.classList.remove("active");
            });
            element.classList.toggle("active");
        });
    });
}