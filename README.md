# 📸 Foto Verkleiner Pro

Een lichtgewicht, browser-gebaseerde applicatie om de bestandsgrootte van afbeeldingen te verkleinen zonder merkbaar kwaliteitsverlies. Geen uploads naar servers nodig; alles gebeurt veilig en privé op jouw eigen computer.

## ✨ Functionaliteiten
- **Compressie in de browser:** Je privacy is gegarandeerd omdat foto's niet naar een server worden gestuurd.
- **Slimme Optimalisatie:** Gebruikt de `browser-image-compression` bibliotheek voor de beste balans tussen grootte en kwaliteit.
- **Snelheid:** Maakt gebruik van Web Workers voor razendsnelle verwerking zonder de browser te vertragen.
- **Modern Design:** Een schone en responsieve interface gebouwd met CSS.

## 🚀 Hoe te gebruiken
1. Clone deze repository of download de bestanden (`index.html`, `style.css`, `script.js`).
2. Open `index.html` in je favoriete webbrowser (Chrome, Firefox, Edge, etc.).
3. Selecteer een afbeelding via de 'Upload' knop.
4. Wacht tot de verwerking klaar is en klik op **Download Verkleinde Foto**.

## 🛠️ Gebruikte Technologieën
* **HTML5:** Structuur van de webpagina.
* **CSS3:** Styling en animaties (Flexbox en Gradients).
* **JavaScript (ES6+):** Logica, Async/Await en DOM-manipulatie.
* **[browser-image-compression](https://www.npmjs.com/package/browser-image-compression):** De motor achter de beeldverwerking.

## 📂 Projectstructuur
```text
/
├── index.html   # De hoofdstructuur van de website
├── style.css    # De vormgeving en lay-out
├── script.js     # De JavaScript-logica voor compressie
└── README.md    # Deze handleiding
