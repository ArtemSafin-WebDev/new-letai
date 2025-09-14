import Validator from "./classes/Validator";
import axios from "axios"

export default function bitrixForms() {
  const forms = Array.from(
    document.querySelectorAll<HTMLFormElement>(".js-bitrix-validation")
  );

  forms.forEach((form) => {
    const validator = new Validator(form);
    const controller = new AbortController();
    form.validator = validator;
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      validator.validate();
      if (!validator.valid) {
        return;
      }

      // @ts-ignore
      const wait = BX.showWait(form);
      const formData = new FormData(form);
      axios
          .post(form.action, formData, {
            signal: controller.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            alert("Заявка отправлена!")
            if (form) {
              form.reset();
            }
          })
          .catch(() => {
            alert("Ошибка")
          });

      // @ts-ignore
      BX.closeWait(form, wait);
    });
  });
}
