import Validator from "./classes/Validator";

export default function forms() {
  const forms = Array.from(
    document.querySelectorAll<HTMLFormElement>(".js-form-validation")
  );

  forms.forEach((form) => {
    const validator = new Validator(form);
    form.validator = validator;
    form.addEventListener("submit", (event) => {
      validator.validate();
      if (!validator.valid) {
        event.preventDefault();
      }
    });
  });
}
