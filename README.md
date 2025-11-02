# 🌞 Web sobre València
Projecte final de l’assignatura Eines HTML i CSS II  UOC

Autora: Minea Licer Silvestre

## 🏙️ Descripció del projecte

Aquest projecte consisteix en la creació d’una landing page sobre la ciutat de València, dissenyada i desenvolupada amb un enfocament semàntic, accessible i responsive.
L’objectiu és aplicar els coneixements adquirits al llarg de l’assignatura, utilitzant un workflow modern de desenvolupament front-end i bones pràctiques de codi.

El lloc web presenta els principals atractius de la ciutat, amb una estructura modular i un estil coherent amb la seua identitat mediterrània.

## 🧩 Objectius principals

Aplicar HTML5 semàntic per estructurar correctament la informació.

Utilitzar SCSS modular i la metodologia BEM per mantenir un codi net i escalable.

Desenvolupar una maquetació responsive seguint l’enfocament Mobile First.

Implementar bones pràctiques d’accessibilitat (a11y).

Gestionar el projecte amb Git i GitHub.

Publicar el lloc amb Netlify, utilitzant el build automatitzat de Parcel.

⚙️ Estructura del projecte
📁 src/
 ├── 📁 html/
 │   ├── header.html
 │   ├── home.html
 │   └── footer.html
 ├── 📁 scss/
 │   ├── base/
 │   ├── components/
 │   ├── layout/
 │   ├── utils/
 │   └── main.scss
 ├── 📁 js/
 │   ├── menu.js
 │   └── footer-year.js
 ├── 📁 images/
 └── index.html


L’estructura segueix el model de UOC Boilerplate, amb separació clara de continguts, estils i funcionalitat.

## 🎨 Guia d’estil

Colors: gamma mediterrània, amb contrast suficient i tons blaus i terrosos.

Tipografies: jerarquia visual clara (títols, subtítols i cos de text).

Metodologia: BEM per a la nomenclatura de classes (.bloc__element--modificador).

SCSS: ús de variables, mixins i partials per modularitzar el codi.

## 📱 Maquetació responsive

Enfocament Mobile First, començant per pantalles menudes.

Adaptacions progressives mitjançant media queries.

Ús de Flexbox i Grid per crear disposicions adaptables.

Verificació en diferents dispositius i navegadors.

## 💡 Funcionalitat i interacció

Menú responsive amb control d’accessibilitat (aria-expanded, hidden).

Any automàtic al peu de pàgina via JavaScript.

Validacions de formulari i comportament general modularitzat amb type="module".

## 🧭 Publicació i control de versions

Git: inicialització, commits i pujades a GitHub.

Netlify: desplegament amb build automatitzat npm-run-all clean parcel:build.

Verificació de funcionament i de la correcta adaptació responsive.

📍 Enllaç al lloc publicat:
👉 [https://valencia-landing.netlify.app](https://pac1-minealicer.netlify.app/)
