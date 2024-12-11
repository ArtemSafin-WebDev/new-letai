export default function vacancies() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".vacancies__card")
  );
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      elements.forEach((otherElement) => {
        if (otherElement !== element) {
          otherElement.classList.remove("active");
        }
        element.classList.toggle("active");
      });
    });
  });
}
