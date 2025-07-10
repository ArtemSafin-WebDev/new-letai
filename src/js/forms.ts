import Validator from "./classes/Validator";

export default function forms() {
  const forms = Array.from(
    document.querySelectorAll<HTMLFormElement>(".js-form-validation")
  );

  forms.forEach((form) => {
    const validator = new Validator(form);
    form.validator = validator;
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      validator.validate();
      if (!validator.valid) {
        return;
      }

      // @ts-ignore
      const wait = BX.showWait(form);


      const data = {
        // @ts-ignore
        firstname: form.elements['firstname'].value,
        // @ts-ignore
        phone: form.elements['phone'].value
      };

      // @ts-ignore
      BX.ajax.runComponentAction('tattelecom:form',
          'sendLead', {
            mode: 'class',
            // @ts-ignore
            data: {post: data}, // ключи объекта data соответствуют параметрам метода
          })
          // @ts-ignore
          .then(function(response) {
            if (response.status === 'success') {

              if (response.data.status === false){
                alert(response.data.error_text);
              }
              else{
                form.reset();

                alert("Заявка отправлена!")
              }
            }
          },
          // @ts-ignore
          function (response){
            alert("Ошибка")
          });

      // @ts-ignore
      BX.closeWait(form, wait);
    });
  });
}
