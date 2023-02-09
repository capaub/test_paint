// Création de mon objet canvas de la classe Dessin

// let test = new Test("#sheet"); -- pour les tests ...
let test = new Draw("#sheet");

// Ecoute des événements 

const more = document.querySelector("#more");
const less = document.querySelector("#less");
const gum = document.querySelector("#gum");
const erase = document.querySelector("#erase");
const text = document.querySelector("#text");
const rectangle = document.querySelector("#rectangle");

// execution des != fonctions aux click (evenements)

more.addEventListener("click", () => {
    test.upSizing();
});

less.addEventListener("click", () => {
    test.downSizing();
});

gum.addEventListener("click", (e) => {
    test.isGumMode=true;
    console.log(test.currentPos.x, test.currentPos.y)
    test.drawLine(test.currentPos.x, test.currentPos.y, e.offsetX, e.offsetY);
});

erase.addEventListener("click", () => {
    test.erase();
});

text.addEventListener("click", () => {
    test.drawText();
});

rectangle.addEventListener("click", () => {
    test.drawRect();
});