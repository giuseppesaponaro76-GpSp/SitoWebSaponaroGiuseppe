# Sito personale – Giuseppe

Sito web personale realizzato in **HTML, CSS e JavaScript**, progettato per presentare competenze, progetti e consentire il contatto diretto tramite form.

Il progetto è **responsive**, accessibile e sviluppato senza framework JS, utilizzando solo codice nativo.

---

## 📁 Struttura del progetto

/
├── index.html # Home page con sezioni e form contatti
├── cv.html # Pagina Curriculum Vitae
├── grazie.html # Pagina di conferma invio form
├── README.md # Documentazione del progetto
└── assets/
├── css/
│ └── styles.css # Foglio di stile principale
├── img/ # Immagini (logo, icone, progetti)
├── cv/
│ └── CV_Giuseppe.pdf
└── favicon/
└── favicon.svg

---

## 🌐 Pagine del sito

### `index.html`

- Pagina principale
- Sezioni:
  - Chi sono
  - Competenze
  - Progetti
  - **Contatti** (form funzionante)
- Navigazione interna tramite anchor (`#contact`, `#projects`, ecc.)

### `cv.html`

- Curriculum Vitae in formato HTML
- Pulsante per scaricare il CV in PDF
- Link “Contattami” che rimanda direttamente al form nella home (`index.html#contact`)

### `grazie.html`

- Pagina di conferma visualizzata dopo l’invio corretto del form

---

## 📱 Responsive Design

- Layout **mobile-first**
- Menu:
  - Desktop: navigazione orizzontale
  - Mobile: menu hamburger realizzato con `<details>` (senza JavaScript)
- Utilizzo di **Flexbox** e **CSS Grid**

---

## ✉️ Form di contatto

- Presente nella home (`index.html`)
- Campi:
  - Nome
  - Email
  - Messaggio
- **Validazione HTML + CSS**
- Integrazione con **EmailJS** per l’invio delle email senza backend
- Redirect automatico alla pagina `grazie.html` dopo l’invio

---

## 🎨 Tecnologie utilizzate

- **HTML5** (struttura semantica)
- **CSS3**
  - Flexbox
  - Grid
  - Media queries
  - Pseudo-classi (`:focus`, `:invalid`)
- **JavaScript**
  - Solo per EmailJS e piccoli comportamenti essenziali
- **EmailJS** per la gestione dell’invio email

---

## ♿ Accessibilità

- Attributi `aria-label` e `aria-current`
- Navigazione da tastiera
- Contrasto colori e focus visibile
- Link esterni aperti in nuova scheda (`target="_blank"`, `rel="noopener"`)

---

## 🧪 Stato del progetto

✔️ Completato  
✔️ Testato su desktop e mobile  
✔️ Form funzionante  
✔️ Pronto per consegna o pubblicazione

---

## 👤 Autore

**Giuseppe**  
Sito personale e progetto didattico per apprendimento HTML, CSS e JavaScript.
