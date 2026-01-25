

    // 1) Inizializza EmailJS
    emailjs.init("WGK6jllegLgZ601Ld"); // <-- sostituisci con la tua Public Key

    // 2) Aggancia il form
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_ndfwo8q",   // <-- sostituisci
        "template_cvvqsgl",  // <-- sostituisci
        form
      ).then(
        () => {
          window.location.href = "grazie.html";
        },
        (error) => {
          alert("Errore nell'invio. Riprova.");
          console.error(error);
        }
      );
    });