// Création de mon objet canvas de la classe Dessin

let draw = new Draw("#sheet");

// Déclaration des fonctions

window.onresize = () => {
    draw.resizeCanvas();
    draw = new Draw("#sheet");
};

// Ecoute des événements

const more = document.querySelector("#more")

const less = document.querySelector("#less")

const gum = document.querySelector("#gum")

const erase = document.querySelector("#erase")

const text = document.querySelector("#text")

const rectangle = document.querySelector("#rectangle")

// execution des != fonctions au click

more.addEventListener("click", () => {
    draw.upSizing();
});

less.addEventListener("click", () => {
    draw.downSizing();
});

gum.addEventListener("click", () => {
    draw.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
});

erase.addEventListener("click", () => {
    draw.erase();
});

text.addEventListener("click", () => {
    draw.drawText();
});

rectangle.addEventListener("click", () => {
    draw.drawRect();
});