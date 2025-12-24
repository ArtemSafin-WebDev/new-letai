export default function () {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".advent-modal__galactic-form-inputs"
    )
  );
  elements.forEach((element) => {
    const inputs = element.querySelectorAll<HTMLInputElement>(
      ".advent-modal__galactic-form-inputs-wrapper input"
    );
    const hidden = element.querySelector<HTMLInputElement>(
      "input[type='hidden']"
    );

    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "");

        if (input.value && inputs[index + 1]) {
          inputs[index + 1].focus();
        }
        updateDate();
      });

      input.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Backspace" && !input.value && inputs[index - 1]) {
          inputs[index - 1].focus();
        }
      });
    });

    function updateDate() {
      const v = [...inputs].map((i) => i.value).join("");
      if (v.length === 8 && hidden) {
        hidden.value = `${v.slice(0, 2)}.${v.slice(2, 4)}.${v.slice(4)}`;
      }
    }
  });
}
